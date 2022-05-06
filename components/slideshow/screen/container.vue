<template>
<div
  :class="[
    'container',
    preference.general.hoverVisibleHud && 'container--hover',
  ]">
  <Slides
    v-if="existSlides"
    ref="slides"
    class="container__slides"/>
  <Empty v-else/>
  <Navigation
    v-if="preference.general.hud"
    ref="$navigation"
    class="container__navigation"/>
  <teleport to="body">
    <transition name="modal-fade">
<!--    <Group v-if="windows.group"/>-->
<!--    <Thumbnail v-if="windows.thumbnail"/>-->
      <Preference v-if="windows.preference"/>
    </transition>
  </teleport>
</div>
</template>

<script setup>
import { ref, reactive, computed, onMounted, onUnmounted } from 'vue';
import { preferenceStore, currentStore, dataStore, windowsStore } from '~/store/slideshow';
// import i18n from '../i18n';
// import store from '../store';
// import * as local from '../libs/local';
import Slides from '../components/slides/index.vue';
import Empty from '../components/slides/empty.vue';
import Navigation from './navigation/index.vue';
import Preference from './preference/index.vue';
// import Group from './Group/index.vue';
// import Thumbnail from './Thumbnail/index.vue';

const $navigation = ref();
const props = defineProps({
  error: Object,
});
const current = currentStore();
const preference = preferenceStore();
const data = dataStore();
const windows = windowsStore();
const existSlides = computed(() => {
  const items = data.groups[current.tree];
  return items?.length > 0;
});

// let computes = reactive({
//   mode: computed(() => {
//     switch (store.state.mode)
//     {
//       case 'preference':
//       case 'group':
//       case 'thumbnail':
//         return store.state.mode;
//       default:
//         return null;
//     }
//   }),
//   existSlides: computed(() => {
//     return store.state.slides && store.state.slides.length > 0;
//   }),
//   showThumbnail: computed(() => (computes.mode === 'thumbnail')),
//   showPreference: computed(() => (computes.mode === 'preference')),
//   showGroup: computed(() => (computes.mode === 'group')),
//   emptyTitle: computed(() => {
//     return props.error ? props.error.title : undefined;
//   }),
//   emptyDescription: computed(() => {
//     return props.error ? props.error.description : undefined;
//   }),
// });
// let keys = [];
//
// // methods
// function onKeyup(e)
// {
//   if (!store.state.keyboardEvent) return;
//   if (keys.length > 1)
//   {
//     const idx = keys.indexOf(e.keyCode);
//     if (idx > -1) keys.splice(idx);
//     return;
//   }
//   if ($navigation.value) $navigation.value.blur();
//   if (computes.mode)
//   {
//     switch (e.keyCode)
//     {
//       case 27: // esc
//         store.dispatch('changeMode', null);
//         break;
//     }
//   }
//   else
//   {
//     switch (e.keyCode)
//     {
//       case 37: // arrow left
//         if (local.slides) local.slides.prev();
//         break;
//       case 39: // arrow right
//         if (local.slides) local.slides.next();
//         break;
//       case 65: // a
//         if (local.slides && store.state.preference.slides.autoplay)
//         {
//           local.slides.autoplay();
//         }
//         break;
//       case 80: // p
//         store.dispatch('changeMode', 'preference');
//         break;
//       case 84: // t
//         store.dispatch('changeMode', 'thumbnail');
//         break;
//       case 82: // r
//         if (confirm(t('confirm.restart')) && local.main)
//         {
//           local.main.restart().then();
//         }
//         break;
//       case 71: // g
//         if (store.state.tree && Object.keys(store.state.tree).length > 1)
//         {
//           store.dispatch('changeMode', 'group');
//         }
//         break;
//       case 72: // h
//         store.dispatch('changeHud');
//         break;
//       case 83: // s
//         switch (store.state.serviceMode)
//         {
//           case 'create':
//           case 'manage':
//             local.main.save();
//             break;
//         }
//         break;
//     }
//   }
//   keys = [];
// }
// function onKeydown(e)
// {
//   if (!store.state.keyboardEvent) return;
//   if (keys.indexOf(e.keyCode) > -1) return;
//   keys.push(e.keyCode);
// }

// lifecycles
onMounted(() => {
//   // setup slides
//   local.setupSlides(slides.value);
//   // on keyboard event
//   if (store.state.preference.keyboard.enabled)
//   {
//     window.on('keyup.slideshow-keyboard', onKeyup);
//     window.on('keydown.slideshow-keyboard', onKeydown);
//   }
//   else
//   {
//     window.off('keyup.slideshow-keyboard');
//     window.off('keydown.slideshow-keyboard');
//   }
});
onUnmounted(() => {
//   // off keyboard event
//   if (store.state.preference.keyboard.enabled)
//   {
//     window.off('keyup.slideshow-keyboard');
//     window.off('keydown.slideshow-keyboard');
//   }
});
</script>

<style src="./container.scss" lang="scss" scoped></style>
