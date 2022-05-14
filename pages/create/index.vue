<template>
<Slideshow
  ref="$slideshow"
  mode="create"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Slideshow from '~/components/slideshow/index.vue';

definePageMeta({
  layout: 'slideshow',
});

const $slideshow = ref();
</script>

<style src="./index.scss" lang="scss" scoped></style>
