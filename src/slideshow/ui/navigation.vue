<template>
<nav class="navigation" @touchstart="onTouchStart" @click.stop="">
  <div v-if="visibleAutoplay" class="navigation__item">
    <button
      type="button"
      title="자동재생"
      :class="current.autoplay ? 'active' : ''"
      @click="onClickAutoplay">
      <Icon name="play-circle"/>
    </button>
  </div>
  <div v-if="visibleGroup" class="navigation__item">
    <button
      type="button"
      title="그룹"
      @click="route('open-groups')">
      <Icon name="folder"/>
    </button>
  </div>
  <div v-if="preference.general.visibleHudContents.menu" class="navigation__item">
    <button
      type="button"
      title="메뉴"
      :class="activeMenu ? 'on' : ''"
      @click="onClickMenuButton">
      <Icon name="menu"/>
    </button>
    <div :class="[ 'navigation-context', activeMenu && 'navigation-context--on' ]">
      <ul>
        <li v-if="data.existSlide">
          <button
            type="button"
            @click="route('open-thumbnail')">
            슬라이드 목록
          </button>
        </li>
        <li>
          <button type="button" @click="route('open-preference')">
            환경설정
          </button>
        </li>
        <li>
          <button
            type="button"
            :class="[ activeFullscreen && 'on' ]"
            @click="onClickContextItem('fullscreen')">
            전체화면
          </button>
        </li>
        <li>
          <button
            type="button"
            class="active"
            @click="onClickContextItem('slideshowService')">
            슬라이드쇼 바로가기
          </button>
        </li>
      </ul>
    </div>
  </div>
  <div v-if="data.field.admin" class="navigation__item">
    <button
      type="button"
      :title="`슬라이드쇼 저장하기`"
      class="active"
      @click="save">
      <Icon name="save"/>
    </button>
  </div>
</nav>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import { $post } from '../../libs/api.js'
import { serviceStore } from '../../store/service.js'
import { preferenceStore, currentStore, dataStore, windowsStore } from '../../store/slideshow.js'
import { fullscreen } from '../../libs/util.js'
import { captureError, CODE, labels } from '../../libs/error.js'
import Icon from '../../components/icon/index.vue'

const router = useRouter()
const emits = defineEmits([ 'trigger' ])
const service = serviceStore()
const preference = preferenceStore()
const current = currentStore()
const data = dataStore()
const windows = windowsStore()
const activeMenu = ref(false)
const activeFullscreen = ref(false)
const visibleAutoplay = computed(() => {
  if (!preference.slides.autoplay) return false
  return data.existSlide
})
const visibleGroup = computed(() => {
  if (!preference.general.visibleHudContents.group) return false
  return Object.keys(data.groups)?.length > 0
})

// private methods
function onClickAutoplay()
{
  if (!data.existSlide) return
  const sw = !current.autoplay
  current.autoplay = sw
  current.update('autoplay', sw)
}
function onClickMenuButton(e)
{
  if (e) e.stopPropagation()
  if (activeMenu.value)
  {
    switchActiveMenu(false)
  }
  else
  {
    window.on('click.navigationMenu', () => switchActiveMenu(false))
    switchActiveMenu(true)
  }
}
function switchActiveMenu(sw)
{
  activeMenu.value = sw
  if (!sw) window.off('click.navigationMenu')
}
function onClickContextItem(key)
{
  switchActiveMenu(false)
  switch (key)
  {
    case 'fullscreen':
      fullscreen(!activeFullscreen.value)
      activeFullscreen.value = !activeFullscreen.value
      break
    case 'slideshowService':
      route(!!history.state.back ? 'slideshowService' : 'slideshowServiceNewWindow')
      break
  }
}
function onTouchStart(e)
{
  if (e.touches && e.touches.length > 1) e.preventDefault()
}

function route(key)
{
  switch(key)
  {
    case 'slideshowService':
      router.push('/').then()
      break
    case 'slideshowServiceNewWindow':
      window.open('/')
      break
    case 'open-thumbnail':
      switchActiveMenu(false)
      windows.thumbnail = true
      break
    case 'open-groups':
      switchActiveMenu(false)
      windows.group = true
      break
    case 'open-preference':
      switchActiveMenu(false)
      windows.preference = true
      break
    case 'service':
      if (!confirm('슬라이드쇼로 돌아갈까요?')) return
      router.push('/').then()
      break
  }
}

// public methods
function blur()
{
  switchActiveMenu(false)
}

// save
async function save()
{
  if (!confirm('정말로 슬라이드를 저장할까요?')) return
  try
  {
    let slideshow = {
      group: current.tree,
      preference: preference.pure,
      tree: data.pureGroups,
    }
    let res = await $post(`/api/manage/edit/${data.field.srl}/`, {
      json: JSON.stringify(slideshow),
    })
    if (!res.success) throw new Error(CODE.FAILED_SAVE)
    alert('슬라이드쇼를 저장했습니다.')
  }
  catch(e)
  {
    captureError(['/slideshow/ui/navigation.vue', 'save()'], 'error', e.message)
    alert(labels[CODE.FAILED_SAVE])
  }
}

// lifecycles
onMounted(() => {
  document.on('fullscreenchange.slideshow', () => {
    activeFullscreen.value = !!document.fullscreenElement
  })
})
onUnmounted(() => {
  document.off('fullscreenchange.slideshow')
})

// set expose
defineExpose({
  blur,
})
</script>

<style src="./navigation.scss" lang="scss" scoped></style>
