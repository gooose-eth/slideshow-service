<template>
<nuxt-layout>
  <Html lang="ko">
    <Body ontouchstart=""></Body>
  </Html>
  <nuxt-page/>
</nuxt-layout>
</template>

<script lang="ts" setup>
const nuxtApp = useNuxtApp();
const route = useRoute();

// setup
const { data } = await useAsyncData('setup', () => $fetch('/api/setup', {
  method: 'post',
  body: {
    mode: 'default', // default,watch,admin
  },
}));
const { success } = data.value;

nuxtApp.hook('page:finish', (): void => {
  // window.scrollTo(0, 0); // TODO: 상단으로 올리기
});
</script>
