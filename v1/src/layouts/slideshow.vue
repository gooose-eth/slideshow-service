<template>
<div class="slideshow">
  <slot/>
</div>
</template>

<script setup>
import { computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { preferenceStore } from '../store/slideshow.js'

const preference = preferenceStore()
let $html
const theme = computed(() => (preference.style?.screenColor ? `theme-${preference.style.screenColor}` : ''))

function updateTheme(newValue, oldValue)
{
  if (oldValue) $html.classList.remove(oldValue)
  if (newValue) $html.classList.add(newValue)
}

onMounted(() => {
  $html = document.querySelector('html')
  if (!$html) return
  $html.classList.add('mode-slideshow')
  updateTheme(theme.value)
})
onBeforeUnmount(() => {
  if (!$html) return
  $html.classList.remove('mode-slideshow')
  if (theme?.value) $html.classList.remove(theme.value)
  $html = undefined
})

watch(() => theme.value, (value, oldValue) => {
  if (oldValue === value) return
  updateTheme(value, oldValue)
})
</script>

<style src="./slideshow.scss" lang="scss"></style>
<style src="./slideshow.scoped.scss" lang="scss" scoped></style>
