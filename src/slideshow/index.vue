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
  <Slides
    v-if="data.existSlide"
    ref="$slides"
    class="container__slides"/>
  <Empty v-else/>
  <Navigation
    v-if="preference.general.hud"
    ref="$navigation"
    class="container__navigation"/>
</div>
<teleport to="#modals">
  <transition name="modal-fade">
    <ModalWrap v-if="windows.preference" @close="windows.preference = false">
      <ModalBody>
        <Preference/>
      </ModalBody>
    </ModalWrap>
  </transition>
  <transition name="modal-fade">
    <ModalWrap v-if="windows.group" @close="windows.group = false">
      <ModalBody>
        <Groups/>
      </ModalBody>
    </ModalWrap>
  </transition>
  <transition name="modal-fade">
    <ModalWrap v-if="windows.thumbnail" :full-screen="true" @close="windows.thumbnail = false">
      <Thumbnail @change="onChangeActiveSlide"/>
    </ModalWrap>
  </transition>
  <div v-if="!!debug" class="debug">
    <pre>{{debug}}</pre>
  </div>
</teleport>
</template>

<script setup>
import { ref, computed, nextTick, watch, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { preferenceStore, usePreferenceStore, currentStore, dataStore, windowsStore } from '../store/slideshow.js'
import { serviceStore } from '../store/service.js'
import { getStorage } from '../libs/storage.js'
import { checkTree } from '../libs/slideshow.js'
import { captureError, CODE } from '../libs/error.js'
import { pureObject } from '../libs/util.js'
import * as defaults from '../libs/defaults.js'
import Slides from './slides/index.vue'
import Empty from './slides/empty.vue'
import Navigation from './ui/navigation.vue'
import Preference from './preference/index.vue'
import { ModalWrap, ModalBody } from '../components/modal/index.js'
import Groups from './groups/index.vue'
import Thumbnail from './thumbnail/index.vue'
import Loading from '../components/loading/index.vue'

const route = useRoute()
const service = serviceStore()
const $navigation = ref()
const $slides = ref()
const running = ref(false)
const props = defineProps({
  mode: String, // watch,edit
  src: [ Object, undefined ],
})
const emits = defineEmits([ 'open-save' ])
const current = currentStore()
const preference = preferenceStore()
const usePreference = usePreferenceStore()
const data = dataStore()
const windows = windowsStore()
let keys = []
const debug = computed(() => {
  return service.dev ? {
    mode: current.mode,
    srl: data.field?.srl,
    admin: data.field?.admin,
    activeSlide: current.activeSlide,
    keyboard: current.keyboardEvent,
    windows: {
      group: windows.group,
    },
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

function checkSlideshowData()
{
  const { src } = props
  try
  {
    if (!src) throw new Error('no-data')
    if (!(src.srl > 0)) throw new Error('no-srl')
    if (!src.title) throw new Error('no-title')
    let jsonKeys = Object.keys(src.json)
    if (!(jsonKeys.length > 0))
    {
      if (!src.admin) throw new Error('no-data')
      return false
    }

    if (src.json)
    {
      if (!src.json.group) throw new Error('no-slide-group')
      if (!src.json.preference) throw new Error('no-preference')
      if (!(src.json.tree)) throw new Error('no-slides')
      if (!checkTree(src.json.tree)) throw new Error('error-slide-tree')
      return true
    }
    return false
  }
  catch (e)
  {
    captureError(['/slideshow/index.vue', 'checkSlideshowData()'], 'error', e.message)
    throw new Error(CODE['INVALID-SLIDESHOW-DATA'])
  }
}

async function setup(newJsonData = false)
{
  const { src } = props
  let { json } = src

  if (newJsonData)
  {
    const pureDefaults = pureObject(defaults)
    json = {
      group: 'default',
      preference: pureDefaults.preference,
      tree: pureDefaults.groups,
    }
  }

  if (!(json?.preference && json.tree)) return
  // update store - preference
  preference.general = json.preference.general
  preference.slides = json.preference.slides
  preference.style = json.preference.style
  preference.keyboard = json.preference.keyboard
  // update store - data
  data.groups = json.tree
  // update store - data fields
  data.field.srl = Number(src.srl)
  data.field.title = src.title
  data.field.description = src.description || ''
  data.field.regdate = src.regdate
  data.field.thumbnail = src.thumbnail || ''
  data.field.admin = !!src.admin
  // update store - current
  current.mode = props.mode
  current.tree = json.group
  current.activeSlide = preference.slides.initialNumber
  current.keyboardEvent = preference.keyboard.enabled
  current.autoplay = preference.slides.autoplay
  // update store - usePreference
  if (data.field.admin) usePreference.data = true

  // update store from storage
  if (current.watchMode)
  {
    const storage = getStorage(`slide#${data.field.srl}`)
    if (storage?.preference)
    {
      preference.general = storage.preference.general
      preference.slides = storage.preference.slides
      preference.style = storage.preference.style
      preference.keyboard = storage.preference.keyboard
    }
    if (storage?.current)
    {
      if (storage.current.tree) current.tree = storage.current.tree
      if (storage.current.autoplay !== undefined)
      {
        current.autoplay = storage.current.autoplay === true
      }
      if (storage.current.slide !== undefined)
      {
        current.activeSlide = storage.current.slide
      }
    }
  }

  // update with route query
  if (route.query.group)
  {
    current.tree = route.query.group
  }

  // select tree
  await data.selectedTree()

  // tick
  await nextTick()

  // set active slide
  if (route.query.group && !isNaN(Number(route.query.slide)))
  {
    current.activeSlide = data.getSlideIndex(route.query.slide)
  }

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

  // off loading
  current.loading = false
}

function destroy()
{
  // off keyboard event
  if (preference.keyboard.enabled)
  {
    window.removeEventListener('keyup', onKeyup)
    window.removeEventListener('keydown', onKeydown)
  }
  // destroy stores
  current.destroy()
  windows.destroy()
  data.destroy()
  preference.destroy()
  usePreference.destroy()
}

onMounted(() => {
  if (!props.src) return
  setup(!(props.src.json?.preference)).then()
})
onBeforeUnmount(() => {
  destroy()
})
watch(() => props.src, async () => {
  let newData = false
  if (running.value)
  {
    destroy()
    await nextTick()
  }
  if (!checkSlideshowData()) newData = true
  await setup(newData)
})
</script>

<style src="./index.scss" lang="scss" scoped></style>
