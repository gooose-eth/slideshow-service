<template>
<article v-html="_html" class="about"/>
</template>

<script setup>
import { ref, computed } from 'vue'
import { adminStore } from '../../store/service.js'
import aboutContent from '../../../server/resource/about.html?raw'

const admin = adminStore()
const error = ref(null)
const _html = computed(() => {
  return aboutContent
})
</script>

<style src="./index.scss" lang="scss"></style>
