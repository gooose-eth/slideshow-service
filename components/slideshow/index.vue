<template>
<div :class="[
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
        <Thumbnail/>
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
import { ref, onMounted, onUnmounted } from 'vue';
import { preferenceStore, currentStore, dataStore, windowsStore } from '~/store/slideshow';
import Slides from './components/slides/index.vue';
import Empty from './components/slides/empty.vue';
import Navigation from './screen/navigation/index.vue';
import Preference from './screen/preference/index.vue';
import { ModalWrap, ModalBody } from '~/components/modal';
import Groups from './screen/groups/index.vue';
import Thumbnail from './screen/thumbnail/index.vue';
import Save from './screen/save/index.vue';

const $navigation = ref();
const $slides = ref();
const props = defineProps({
  error: Object,
});
const emits = defineEmits([ 'open-save' ]);
const current = currentStore();
const preference = preferenceStore();
const data = dataStore();
const windows = windowsStore();
const keyboardEventName = 'slideshow-keyboard';
let keys = [];

function onKeyup(e)
{
  // if (!store.state.keyboardEvent) return;
  // if (keys.length > 1)
  // {
  //   const idx = keys.indexOf(e.keyCode);
  //   if (idx > -1) keys.splice(idx);
  //   return;
  // }
  // if ($navigation.value) $navigation.value.blur();
  // if (computes.mode)
  // {
  //   switch (e.keyCode)
  //   {
  //     case 27: // esc
  //       store.dispatch('changeMode', null);
  //       break;
  //   }
  // }
  // else
  // {
  //   switch (e.keyCode)
  //   {
  //     case 37: // arrow left
  //       if (local.slides) local.slides.prev();
  //       break;
  //     case 39: // arrow right
  //       if (local.slides) local.slides.next();
  //       break;
  //     case 65: // a
  //       if (local.slides && store.state.preference.slides.autoplay)
  //       {
  //         local.slides.autoplay();
  //       }
  //       break;
  //     case 80: // p
  //       store.dispatch('changeMode', 'preference');
  //       break;
  //     case 84: // t
  //       store.dispatch('changeMode', 'thumbnail');
  //       break;
  //     case 82: // r
  //       if (confirm(t('confirm.restart')) && local.main)
  //       {
  //         local.main.restart().then();
  //       }
  //       break;
  //     case 71: // g
  //       if (store.state.tree && Object.keys(store.state.tree).length > 1)
  //       {
  //         store.dispatch('changeMode', 'group');
  //       }
  //       break;
  //     case 72: // h
  //       store.dispatch('changeHud');
  //       break;
  //     case 83: // s
  //       switch (store.state.serviceMode)
  //       {
  //         case 'create':
  //         case 'manage':
  //           local.main.save();
  //           break;
  //       }
  //       break;
  //   }
  // }
  // keys = [];
}

function onKeydown(e)
{
  // if (!store.state.keyboardEvent) return;
  // if (keys.indexOf(e.keyCode) > -1) return;
  // keys.push(e.keyCode);
}

onMounted(() => {
  // setup slides
  // local.setupSlides(slides.value);
  // on keyboard event
  if (preference.keyboard.enabled)
  {
    // window.on(`keyup.${keyboardEventName}`, onKeyup);
    // window.on(`keydown.${keyboardEventName}`, onKeydown);
  }
  else
  {
    // window.off(`keyup.${keyboardEventName}`);
    // window.off(`keydown.${keyboardEventName}`);
  }
});
onUnmounted(() => {
  // off keyboard event
  if (preference.keyboard.enabled)
  {
    // window.off(`keyup.${keyboardEventName}`);
    // window.off(`keydown.${keyboardEventName}`);
  }
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
