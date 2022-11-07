<template>
<main class="slideshow">
  <Html
    :class="[
      'mode-slideshow',
      theme,
    ]"/>
  <slot/>
</main>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { serviceStore } from '~/store/service';
import { preferenceStore, currentStore } from '~/store/slideshow';

const route = useRoute();
const service = serviceStore();
const preference = preferenceStore();
const current = currentStore();
const serviceTitle = ref('');
const theme: any = computed(() => (preference.style?.screenColor ? `theme-${preference.style.screenColor}` : ''));

// setup
switch (route.name)
{
  case 'create':
    serviceTitle.value = `${service.title} / 슬라이드쇼 만들기`;
    break;
  default:
    serviceTitle.value = service.title;
    break;
}
</script>

<style lang="scss">
html.mode-slideshow {
  overflow: hidden;
  body {
    position: fixed;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
  }
}
</style>
<style src="./slideshow.scss" lang="scss" scoped></style>
