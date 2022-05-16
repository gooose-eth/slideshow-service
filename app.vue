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

// setup
if (process.server) service.setup();
const { data } = await useAsyncData('setup', () => $fetch('/api/setup', {
  method: 'post',
  body: {
    mode: getRouteMode(), // default,watch,admin
  },
}));
const { success } = data.value;

function getRouteMode(): string
{
  switch (route.name)
  {
    case 'create':
      return route.name;
    default:
      return 'default';
  }
}

// nuxtApp.hook('page:finish', (): void => {
//   window.scrollTo(0, 0); // TODO: 상단으로 올리기
// });
</script>
