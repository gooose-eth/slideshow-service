<template>
<nuxt-layout>
  <Html lang="ko">
    <Body ontouchstart=""></Body>
  </Html>
  <nuxt-page/>
</nuxt-layout>
</template>

<script lang="ts" setup>
import { initCustomEvent } from '~/libs/util';

const nuxtApp = useNuxtApp();
const route = useRoute();

if (process.client)
{
  // initial custom event
  initCustomEvent();
}

// setup
const { data } = await useAsyncData('setup', () => $fetch('/api/setup', {
  method: 'post',
  body: {
    mode: 'default', // default,watch,admin
  },
}));
const { success } = data.value;

// nuxtApp.hook('page:start', (): void => {
//   console.log('start');
// });
// nuxtApp.hook('page:finish', (): void => {
//   window.scrollTo(0, 0); // TODO: 상단으로 올리기
// });
</script>
