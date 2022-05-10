<template>
<article>
  <h1>slideshow / watch</h1>
  <pre>{{current}}</pre>
  <pre>{{route.params}}</pre>
</article>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { currentStore } from '~/store/slideshow';

definePageMeta({
  layout: 'slideshow',
});

// const $slideshow = ref();
const route = useRoute();
const current = currentStore();

console.log(route.params.id);

// TODO: 슬라이드쇼 데이터 가져오기

// set store
current.mode = 'watch';
</script>
