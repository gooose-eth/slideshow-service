<template>
<Loading v-if="current.loading"/>
<div v-else :class="[
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
  <teleport to="body">
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
    <transition name="modal-fade">
      <ModalWrap v-if="windows.save" @close="windows.save = false">
        <ModalBody>
          <Save @close="windows.save = false"/>
        </ModalBody>
      </ModalWrap>
    </transition>
  </teleport>
</div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { preferenceStore, currentStore, dataStore, windowsStore } from '~/store/slideshow';
import Slides from './slides/index.vue';
import Empty from './slides/empty.vue';
import Navigation from './screen/navigation/index.vue';
import Preference from './screen/preference/index.vue';
import { ModalWrap, ModalBody } from '~/components/modal';
import Groups from './screen/groups/index.vue';
import Thumbnail from './screen/thumbnail/index.vue';
import Save from './screen/save/index.vue';
import Loading from '~/components/loading/intro.vue';

const $navigation = ref();
const $slides = ref();
const props = defineProps({
  mode: String, // create
  error: Object,
});
const emits = defineEmits([ 'open-save' ]);
const current = currentStore();
const preference = preferenceStore();
const data = dataStore();
const windows = windowsStore();
const keyboardEventName = 'slideshow-keyboard';
let keys = [];

function onKeyup(e: KeyboardEvent): void
{
  if (current.loading) return;
  if (!current.keyboardEvent) return;
  if (keys.length > 1)
  {
    const idx = keys.indexOf(e.code);
    if (idx > -1) keys.splice(idx);
    return;
  }
  if ($navigation.value) $navigation.value.blur();
  if (windows.open)
  {
    switch (e.code)
    {
      case 'Escape': // esc
        if (windows.children.length > 0) return;
        windows.close();
        break;
    }
  }
  else
  {
    switch (e.code)
    {
      case 'ArrowLeft': // arrow left
        $slides.value.prev();
        break;
      case 'ArrowRight': // arrow right
        $slides.value.next();
        break;
      case 'KeyA': // a
        if (data.existSlide && preference.slides.autoplay)
        {
          current.autoplay = !current.autoplay;
        }
        break;
      case 'KeyP': // p
        windows.preference = true;
        break;
      case 'KeyT': // t
        windows.thumbnail = true;
        break;
      case 'KeyG': // g
        if (Object.keys(data.groups)?.length > 1)
        {
          windows.group = true;
        }
        break;
      case 'KeyH': // h
        preference.general.hud = !preference.general.hud;
        break;
      case 'KeyS': // s
        switch (current.mode)
        {
          case 'create':
          case 'manage':
            windows.save = true;
            break;
        }
        break;
    }
  }
  keys = [];
}

function onKeydown(e: KeyboardEvent): void
{
  if (current.loading) return;
  if (!current.keyboardEvent) return;
  if (windows.open) return;
  if (keys.indexOf(e.code) > -1) return;
  keys.push(e.code);
}

function onChangeActiveSlide(n: number): void
{
  $slides.value.change(n, 'none');
}

onMounted(() => {
  // on keyboard event
  if (preference.keyboard.enabled)
  {
    (<any>window).on(`keyup.${keyboardEventName}`, onKeyup);
    (<any>window).on(`keydown.${keyboardEventName}`, onKeydown);
  }
  else
  {
    (<any>window).off(`keyup.${keyboardEventName}`);
    (<any>window).off(`keydown.${keyboardEventName}`);
  }
});
onUnmounted(() => {
  // off keyboard event
  if (preference.keyboard.enabled)
  {
    (<any>window).off(`keyup.${keyboardEventName}`);
    (<any>window).off(`keydown.${keyboardEventName}`);
  }
  current.destroy();
});

// setup
current.setup(props.mode);
</script>

<style src="./index.scss" lang="scss" scoped></style>
