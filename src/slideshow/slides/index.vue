<template>
<article
  :class="[
    'slideshow-slides',
    current.swiped && 'swipe-move',
    `slideshow-slides--${preference.slides.animationType}`
  ]"
  @pointerdown="onPointerStart"
  @pointermove="onPointerMove"
  @pointerup="onPointerEnd"
  @contextmenu="onContextMenu"
  @pointerout="onPointerCancel"
  @pointerenter="onPointerEnter">
  <Images
    ref="$images"
    :move-pos="swipePosition"
    @animation-control="onAnimationControl"
    @change-active="onChangeActive"/>
  <Captions v-if="visibleCaption"/>
  <Controller
    v-if="visibleController"
    :disabled="animated"
    :show-prev="showPrevButton"
    :show-next="showNextButton"
    class="slideshow-slides__controller"
    @click-prev="prev"
    @click-next="next"
    @pointerdown.stop=""/>
  <Paginate
    v-if="visiblePaginate"
    :total="data.selected.length"
    :current="current.activeSlide"
    class="slideshow-slides__paginate"/>
</article>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { currentStore, dataStore, preferenceStore, windowsStore } from '../../store/slideshow.js'
import { moveNumber } from '../../libs/slideshow.js'
import { serialize } from '../../libs/string.js'
import Images from './images.vue'
import Captions from './captions.vue'
import Paginate from './paginate.vue'
import Controller from './controller.vue'

const router = useRouter()
const route = useRoute()
const $images = ref()
const current = currentStore()
const data = dataStore()
const preference = preferenceStore()
const windows = windowsStore()
const swipePosition = ref(undefined)
const animated = ref(false)
const showPrevButton = computed(() => {
  if (preference.slides.loop) return true
  return 0 < current.activeSlide
})
const showNextButton = computed(() => {
  if (preference.slides.loop) return true
  return data.selected.length - 1 > current.activeSlide
})
const visibleCaption = computed(() => {
  const { hud, visibleHudContents } = preference.general
  return hud && visibleHudContents.caption
})
const visibleController = computed(() => {
  const { hud, visibleHudContents } = preference.general
  if (data.selected.length <= 1) return false
  return hud && visibleHudContents.controller
})
const visiblePaginate = computed(() => {
  const { hud, visibleHudContents } = preference.general
  return hud && visibleHudContents.paginate
})
let swipeMeta = null // 슬라이드를 스와이프할때 필요한 정보들을 담는다.
let autoplayTimer = undefined // 오토플레이 `setTimeout` 값을 담는데 사용된다.
let autoplayPause = false // 오토플레이 일시정지할때 사용하는 결정적인 값
let mounted = false
let push = false

// check active number
let active = (current.activeSlide !== undefined) ? current.activeSlide : preference.slides.initialNumber
current.activeSlide = !!checkActive(active) ? active : 0

// private methods
function onAnimationControl(sw)
{
  animated.value = sw
  if (sw) return
  // with autoplay
  let autoplay = current.autoplay && !autoplayPause
  if (autoplay) runAutoplay(true)
}

function onChangeActive(n)
{
  current.activeSlide = n
}

function checkActive(n)
{
  return !!data.selected[n]
}

function onPointerStart(e)
{
  if (animated.value) return
  push = true
  if (!preference.slides.swipe) return
  if (preference.slides.animationType !== 'horizontal') return
  if (data.selected.length <= 2) return
  runAutoplay(false)
  swipeMeta = {
    dist: 0,
    startX: Math.floor(e.clientX),
    moveX: undefined,
    startTime: new Date().getTime(),
  }
  current.swiped = true
}

function onPointerMove(e)
{
  if (!push) return
  if (animated.value || !current.swiped) return
  if (data.selected.length <= 2) return
  swipeMeta.moveX = Math.floor(e.clientX)
  const screenWidth = window.innerWidth
  const dist = swipeMeta.moveX - swipeMeta.startX
  swipePosition.value = (dist / screenWidth * 100) + (0 - (100 * current.activeSlide))
}

function onPointerEnd(e)
{
  function action(dir)
  {
    if (dir) next()
    else prev()
  }
  function cancel()
  {
    $images.value.cancel()
  }

  if (animated.value || !current.swiped) return
  if (data.selected.length <= 2) return

  push = false
  const screenWidth = window.innerWidth
  swipeMeta.endX = Math.floor(e.clientX)
  let dir = swipeMeta.startX > swipeMeta.endX // next is true
  let elapsedTime = new Date().getTime() - swipeMeta.startTime
  let distPos = swipeMeta.endX - swipeMeta.startX
  let percent = Math.abs(distPos) / screenWidth * 100

  // unset values
  swipePosition.value = undefined
  current.swiped = false
  swipeMeta = undefined

  // 클릭하는 수준으로 짧으면 정지
  if (elapsedTime < 60 || percent < 1)
  {
    if (!autoplayPause) runAutoplay(true)
    // toggle hud
    if (preference.general.clickVisibleHud && !e.target.closest('.controller'))
    {
      preference.general.hud = !preference.general.hud
    }
    return
  }

  // play
  if (elapsedTime > 300)
  {
    // long touch
    if (percent > 30) action(dir)
    else cancel()
  }
  else
  {
    // short touch
    if (percent > 5) action(dir)
    else cancel()
  }
}

function onPointerCancel(e)
{
  if (windows.open) return
  e.stopPropagation()
  push = false
  if (current.swiped) $images.value.cancel()
  swipePosition.value = undefined
  current.swiped = false
  if (preference.slides.autoplayPauseOnHover)
  {
    autoplayPause = false
    if (current.autoplay) pause(false, true)
  }
}

function onPointerEnter()
{
  if (preference.slides.autoplayPauseOnHover)
  {
    autoplayPause = true
    if (current.autoplay) pause(true, true)
  }
}

function onContextMenu()
{
  swipePosition.value = undefined
  current.swiped = false
}

function runAutoplay(sw)
{
  if (!mounted) return
  if (sw && !current.autoplay) return
  if (sw && !autoplayTimer)
  {
    if (!current.autoplay) return
    const delay = preference.slides.autoplayDelay
    const dir = preference.slides.autoplayDirection
    const loop = preference.slides.loop
    const side = isActiveSide(dir)
    if (!loop && (!loop && side)) return
    autoplayTimer = setTimeout(() => {
      if (!dir) prev()
      else next()
    }, delay)
  }
  else if (autoplayTimer)
  {
    clearTimeout(autoplayTimer)
    autoplayTimer = undefined
  }
}

function isActiveSide(dir)
{
  if (!(data.selected && data.selected.length > 0)) return
  return (!dir && current.activeSlide === 0) || (dir && current.activeSlide >= data.selected.length - 1)
}

function change(n, userAnimationType = undefined)
{
  if (animated.value || !checkActive(n) || !$images.value) return
  current.activeSlide = n
  current.update('slide', n)
  runAutoplay(false)
  $images.value.play(n, userAnimationType)
  let query = {
    group: current.tree,
    slide: String(data.selected[n].key),
  }
  router.replace(`/watch/${route.params.srl}/${serialize(query, true)}`)
}

function prev()
{
  if (!data.existSlide) return
  let n = moveNumber(data.selected.length, current.activeSlide - 1, preference.slides.loop)
  change(n)
}

function next()
{
  if (!data.existSlide) return
  let n = moveNumber(data.selected.length, current.activeSlide + 1, preference.slides.loop)
  change(n)
}

function pause(sw = undefined, inside = false)
{
  if (sw === undefined) return
  if (!current.autoplay) return
  if (!inside) autoplayPause = sw
  if (!sw || (sw && !animated.value)) runAutoplay(!sw)
}

// lifecycles
onMounted(() => {
  mounted = true
  if (current.autoplay) runAutoplay(true)
})
onUnmounted(() => {
  mounted = false
  if (autoplayTimer)
  {
    clearTimeout(autoplayTimer)
    autoplayTimer = undefined
  }
})

// watch
watch(() => current.autoplay, sw => {
  if (sw)
  {
    if (!autoplayPause) runAutoplay(sw)
  }
  else
  {
    runAutoplay(sw)
  }
})

// set expose
defineExpose({
  change,
  prev,
  next,
  pause,
})
</script>

<style src="./index.scss" lang="scss" scoped></style>
