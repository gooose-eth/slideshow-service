<template>
<article>
  <h1>create slideshow</h1>
  <p v-for="o in new Array(3)">===</p>
</article>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'slideshow',
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
