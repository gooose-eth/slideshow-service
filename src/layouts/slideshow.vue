<template>
<div class="slideshow">
  <slot/>
</div>
</template>

<script setup>
import { computed, onMounted, onBeforeUnmount } from 'vue'
import { preferenceStore } from '../store/slideshow.js'

const preference = preferenceStore()
let $html = undefined
const theme = computed(() => (preference.style?.screenColor ? `theme-${preference.style.screenColor}` : ''))

onMounted(() => {
  $html = document.querySelector('html')
  if ($html)
  {
    $html.classList.add('mode-slideshow')
    $html.classList.add(theme.value)
  }
})
onBeforeUnmount(() => {
  if ($html)
  {
    $html.classList.remove('mode-slideshow')
    $html.classList.remove(theme.value)
    $html = undefined
  }
})
</script>

<style src="./slideshow.scss" lang="scss"></style>
<style src="./slideshow.scoped.scss" lang="scss" scoped></style>
