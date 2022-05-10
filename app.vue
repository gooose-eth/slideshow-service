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
import { serviceStore } from '~/store/service';

const nuxtApp = useNuxtApp();
const route = useRoute();
const service = serviceStore();

if (process.client)
{
  // initial custom event
  initCustomEvent();
}

// console.log(route.name)

// setup
if (process.server) service.setup();
const { data } = await useAsyncData('setup', () => $fetch('/api/setup', {
  method: 'post',
  body: {
    mode: 'default', // default,watch,admin
  },
}));
const { success } = data.value;

// nuxtApp.hook('page:finish', (): void => {
//   window.scrollTo(0, 0); // TODO: 상단으로 올리기
// });
</script>
