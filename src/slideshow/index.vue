<template>
<Loading
  v-if="current.loading"
  message="불러오는 중.."
  class="slideshow-loading"/>
<div
  v-else
  :class="[
    'container',
    preference.general.hoverVisibleHud && 'container--hover',
  ]">
<!--  <Slides-->
<!--    v-if="data.existSlide"-->
<!--    ref="$slides"-->
<!--    class="container__slides"/>-->
<!--  <Empty v-else/>-->
  <Navigation
    v-if="preference.general.hud"
    ref="$navigation"
    class="container__navigation"/>
</div>
<teleport to="body">
<!--  <transition name="modal-fade">-->
<!--    <ModalWrap v-if="windows.preference" @close="windows.preference = false">-->
<!--      <ModalBody>-->
<!--        <Preference/>-->
<!--      </ModalBody>-->
<!--    </ModalWrap>-->
<!--  </transition>-->
<!--  <transition name="modal-fade">-->
<!--    <ModalWrap v-if="windows.group" @close="windows.group = false">-->
<!--      <ModalBody>-->
<!--        <Groups/>-->
<!--      </ModalBody>-->
<!--    </ModalWrap>-->
<!--  </transition>-->
<!--  <transition name="modal-fade">-->
<!--    <ModalWrap v-if="windows.thumbnail" :full-screen="true" @close="windows.thumbnail = false">-->
<!--      <Thumbnail @change="onChangeActiveSlide"/>-->
<!--    </ModalWrap>-->
<!--  </transition>-->
<!--  <transition name="modal-fade">-->
<!--    <ModalWrap v-if="windows.save" @close="windows.save = false">-->
<!--      <ModalBody>-->
<!--        <Save @close="windows.save = false"/>-->
<!--      </ModalBody>-->
<!--    </ModalWrap>-->
<!--  </transition>-->
<!--  <transition name="modal-fade">-->
<!--    <ModalWrap v-if="windows.share" @close="windows.share = false">-->
<!--      <ModalBody>-->
<!--        <Share @close="windows.share = false"/>-->
<!--      </ModalBody>-->
<!--    </ModalWrap>-->
<!--  </transition>-->
  <div v-if="!!debug" class="debug">
    <pre>{{debug}}</pre>
  </div>
</teleport>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { watchItemStore, preferenceStore, currentStore, dataStore, windowsStore } from '../store/slideshow.js'
import { serviceStore } from '../store/service.js'
// import Slides from './slides/index.vue'
// import Empty from './slides/empty.vue'
import Navigation from './ui/navigation.vue'
// import Preference from './screen/preference/index.vue'
// import { ModalWrap, ModalBody } from '~/components/modal'
// import Groups from './screen/groups/index.vue'
// import Thumbnail from './screen/thumbnail/index.vue'
import Loading from '../components/loading/index.vue'
// import Save from './screen/save/index.vue'
// import Share from './share/index.vue'

const service = serviceStore()
const $navigation = ref()
const $slides = ref()
const emits = defineEmits([ 'open-save' ])
const watchItem = watchItemStore()
const current = currentStore()
const preference = preferenceStore()
const data = dataStore()
const windows = windowsStore()
const keyboardEventName = 'slideshow-keyboard'
let keys = []
const debug = computed(() => {
  return service.dev ? {
    mode: current.mode,
    address: data.field?.address,
    activeSlide: current.activeSlide,
    keyboard: current.keyboardEvent,
  } : null
})

function onKeyup(e)
{
  if (current.loading) return
  if (!current.keyboardEvent) return
  if (keys.length > 1)
  {
    const idx = keys.indexOf(e.code)
    if (idx > -1) keys.splice(idx)
    return
  }
  if ($navigation.value) $navigation.value.blur()
  if (windows.open)
  {
    switch (e.code)
    {
      case 'Escape': // esc
        if (windows.children.length > 0) return
        windows.close()
        break
    }
  }
  else
  {
    switch (e.code)
    {
      case 'ArrowLeft': // arrow left
        $slides.value.prev()
        break
      case 'ArrowRight': // arrow right
        $slides.value.next()
        break
      case 'KeyA': // a
        if (data.existSlide && preference.slides.autoplay)
        {
          current.update('autoplay', !current.autoplay)
        }
        break
      case 'KeyP': // p
        windows.preference = true
        break
      case 'KeyT': // t
        windows.thumbnail = true
        break
      case 'KeyG': // g
        if (Object.keys(data.groups)?.length > 0)
        {
          windows.group = true
        }
        break
      case 'KeyH': // h
        preference.general.hud = !preference.general.hud
        break
      case 'KeyS': // s
        switch (current.mode)
        {
          case 'create':
          case 'edit':
            windows.save = true
            break
        }
        break
    }
  }
  keys = []
}

function onKeydown(e)
{
  if (current.loading) return
  if (!current.keyboardEvent) return
  if (windows.open) return
  if (keys.indexOf(e.code) > -1) return
  keys.push(e.code)
}

function onChangeActiveSlide(n)
{
  $slides.value.change(n, 'none')
}

onMounted(() => {
  // on keyboard event
  if (preference.keyboard.enabled)
  {
    window.addEventListener('keyup', onKeyup)
    window.addEventListener('keydown', onKeydown)
  }
  else
  {
    window.removeEventListener('keyup', onKeyup)
    window.removeEventListener('keydown', onKeydown)
  }
})
onBeforeUnmount(() => {
  // off keyboard event
  if (preference.keyboard.enabled)
  {
    window.removeEventListener('keyup', onKeyup)
    window.removeEventListener('keydown', onKeydown)
  }
  // destroy stores
  watchItem.destroy()
  current.destroy()
  windows.destroy()
  data.destroy()
  preference.destroy()
})
</script>

<style src="./index.scss" lang="scss" scoped></style>
