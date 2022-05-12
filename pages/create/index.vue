<template>
<LoadingIntro v-if="loading"/>
<Slideshow
  v-else
  ref="$slideshow"
  @open-save="visibleSave = true"/>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { currentStore, windowsStore } from '~/store/slideshow';
import LoadingIntro from '~/components/loading/intro.vue';
import Slideshow from '~/components/slideshow/index.vue';

definePageMeta({
  layout: 'slideshow',
});

const $slideshow = ref();
const current = currentStore();
const visibleSave = ref(false);
const loading = ref(false);
const error = ref(undefined);

// set store
current.setup('create');
</script>

<style src="./index.scss" lang="scss" scoped></style>
