<template>
<article
  :class="[
    'slideshow-slides',
    swipeMove && 'swipe-move',
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
<!--  <Caption-->
<!--    v-if="visibleCaption"-->
<!--    :active="current.activeSlide"-->
<!--    :title="state.caption.title"-->
<!--    :description="state.caption.description"-->
<!--    :animation-type="store.state.preference.slides.captionAnimationType"-->
<!--    :animation-speed="store.state.preference.slides.captionAnimationSpeed"-->
<!--    :position="store.state.preference.style.captionPosition"-->
<!--    :scale="store.state.preference.style.captionScale"/>-->
<!--  <Controller-->
<!--    v-if="visibleController"-->
<!--    :disabled="animated"-->
<!--    :show-prev="showPrevButton"-->
<!--    :show-next="showNextButton"-->
<!--    class="slideshow-slides__controller"-->
<!--    @click-prev="prev"-->
<!--    @click-next="next"/>-->
<!--  <Paginate-->
<!--    v-if="state.visiblePaginate"-->
<!--    :total="data.slides.length"-->
<!--    :current="current.activeSlide"-->
<!--    class="slideshow-slides__paginate"/>-->
</article>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, onMounted, onUnmounted, watch } from 'vue';
import { currentStore, dataStore, preferenceStore, windowsStore } from '~/store/slideshow';
import { moveNumber } from '~/libs/slideshow';
// import store from '../../store';
// import * as number from '../../libs/number';
import Images from './images.vue';
// import Caption from './Caption.vue';
// import Paginate from './Paginate.vue';
// import Controller from './Controller.vue';

const $images = ref();
const current = currentStore();
const data = dataStore();
const preference = preferenceStore();
const windows = windowsStore();
const swipeMove = ref(false);
const swipePosition = ref(undefined);
const animated = ref(false);
const showPrevButton = computed(() => {
  if (preference.slides.loop) return true;
  return 0 < current.activeSlide;
});
const showNextButton = computed(() => {
  if (preference.slides.loop) return true;
  return data.slides.length - 1 > current.activeSlide;
});
const caption = computed(() => {
  interface Slide {
    title: string
    description: string
  }
  const { title, description } = <Slide>(data.slides[current.activeSlide]);
  return { title, description };
});
const visibleCaption = computed(() => {
  const { hud, visibleHudContents } = preference.general;
  return hud && visibleHudContents.caption;
});
const visibleController = computed(() => {
  const { hud, visibleHudContents } = preference.general;
  if (data.slides.length <= 1) return false;
  return hud && visibleHudContents.controller;
});
const visiblePaginate = computed(() => {
  const { hud, visibleHudContents } = preference.general;
  return hud && visibleHudContents.paginate;
})
let swipeMeta = null; // 슬라이드를 스와이프할때 필요한 정보들을 담는다.
let autoplayTimer = undefined; // 오토플레이 `setTimeout` 값을 담는데 사용된다.
let autoplayPause = false; // 오토플레이 일시정지할때 사용하는 결정적인 값
let mounted = false;
let push = false;

// check active number
let active = preference.slides.initialNumber;
current.activeSlide = !!checkActive(active) ? active : 0;

// private methods
function onAnimationControl(sw: boolean): void
{
  animated.value = sw;
  if (sw) return;
  // with autoplay
  let autoplay = current.autoplay && !autoplayPause;
  if (autoplay) runAutoplay(true);
}

function onChangeActive(n: number): void
{
  current.activeSlide = n;
}

function checkActive(n: number): boolean
{
  return !!data.slides[n];
}

function onPointerStart(e: PointerEvent): void
{
  if (animated.value) return;
  push = true;
  if (!preference.slides.swipe) return;
  if (preference.slides.animationType !== 'horizontal') return;
  if (data.slides.length <= 2) return;
  runAutoplay(false);
  swipeMeta = {
    dist: 0,
    startX: Math.floor(e.clientX),
    moveX: undefined,
    startTime: new Date().getTime(),
  };
  swipeMove.value = true;
}

function onPointerMove(e: PointerEvent): void
{
  if (!push) return;
  if (animated.value || !swipeMove.value) return;
  if (data.slides.length <= 2) return;
  swipeMeta.moveX = Math.floor(e.clientX);
  const screenWidth = window.innerWidth;
  const dist = swipeMeta.moveX - swipeMeta.startX;
  swipePosition.value = (dist / screenWidth * 100) + (0 - (100 * current.activeSlide));
}

function onPointerEnd(e): void
{
  function action(dir)
  {
    if (dir) next();
    else prev();
  }
  function cancel()
  {
    $images.value.cancel();
  }

  if (animated.value || !swipeMove.value) return;
  if (data.slides.length <= 2) return;

  push = false;
  const screenWidth = window.innerWidth;
  swipeMeta.endX = Math.floor(e.clientX);
  let dir = swipeMeta.startX > swipeMeta.endX; // next is true
  let elapsedTime = new Date().getTime() - swipeMeta.startTime;
  let distPos = swipeMeta.endX - swipeMeta.startX;
  let percent = Math.abs(distPos) / screenWidth * 100;

  // unset values
  swipePosition.value = undefined;
  swipeMove.value = false;
  swipeMeta = undefined;

  // 클릭하는 수준으로 짧으면 정지
  if (elapsedTime < 60 || percent < 1)
  {
    if (!autoplayPause) runAutoplay(true);
    // toggle hud
    if (preference.general.clickVisibleHud && !e.target.closest('.controller'))
    {
      preference.general.hud = !preference.general.hud;
    }
    return;
  }

  // play
  if (elapsedTime > 300)
  {
    // long touch
    if (percent > 30) action(dir);
    else cancel();
  }
  else
  {
    // short touch
    if (percent > 5) action(dir);
    else cancel();
  }
}

function onPointerCancel(e): void
{
  if (windows.open) return;
  e.stopPropagation();
  push = false;
  if (swipeMove.value) $images.value.cancel();
  swipePosition.value = undefined;
  swipeMove.value = false;
  if (preference.slides.autoplayPauseOnHover)
  {
    autoplayPause = false;
    if (current.autoplay) pause(false, true);
  }
}

function onPointerEnter(): void
{
  if (preference.slides.autoplayPauseOnHover)
  {
    autoplayPause = true;
    if (current.autoplay) pause(true, true);
  }
}

function onContextMenu(): void
{
  swipePosition.value = undefined;
  swipeMove.value = false;
}

function runAutoplay(sw: boolean)
{
  if (!mounted) return;
  if (sw && !current.autoplay) return;
  if (sw && !autoplayTimer)
  {
    if (!current.autoplay) return;
    const delay = preference.slides.autoplayDelay;
    const dir = preference.slides.autoplayDirection;
    const loop = preference.slides.loop;
    const side = isActiveSide(dir);
    if (!loop && (!loop && side)) return;
    autoplayTimer = setTimeout(() => {
      if (!dir) prev();
      else next();
    }, delay);
  }
  else if (autoplayTimer)
  {
    clearTimeout(autoplayTimer);
    autoplayTimer = undefined;
  }
}

function isActiveSide(dir: boolean)
{
  if (!(data.slides && data.slides.length > 0)) return;
  return (!dir && current.activeSlide === 0) || (dir && current.activeSlide >= data.slides.length - 1);
}

// public methods
function change(n: number, userAnimationType: string = undefined): void
{
  if (animated.value || !checkActive(n) || !$images.value) return;
  current.activeSlide = n;
  runAutoplay(false);
  $images.value.play(n, userAnimationType);
}

function prev(): void
{
  if (data.slides?.length <= 0) return;
  let n = moveNumber(
    data.slides.length,
    current.activeSlide - 1,
    preference.slides.loop
  );
  change(n);
}

function next(): void
{
  if (data.slides?.length <= 0) return;
  let n = moveNumber(
    data.slides.length,
    current.activeSlide + 1,
    preference.slides.loop
  );
  change(n);
}

function autoplay(sw: boolean = undefined)
{
  current.autoplay = sw;
}

function pause(sw = undefined, inside = false)
{
  if (sw === undefined) return;
  if (!current.autoplay) return;
  if (!inside) autoplayPause = sw;
  if (!sw || (sw && !animated.value)) runAutoplay(!sw);
}

// lifecycles
onMounted(() => {
  mounted = true;
  if (current.autoplay) runAutoplay(true);
});
onUnmounted(() => {
  mounted = false;
  if (autoplayTimer)
  {
    clearTimeout(autoplayTimer);
    autoplayTimer = undefined;
  }
});

// watch
watch(() => current.autoplay, sw => {
  if (sw)
  {
    if (!autoplayPause) runAutoplay(sw);
  }
  else
  {
    runAutoplay(sw);
  }
});

// set expose
defineExpose({
  change,
  prev,
  next,
  autoplay,
  pause,
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
