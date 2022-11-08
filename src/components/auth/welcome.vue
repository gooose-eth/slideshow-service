<template>
<article class="welcome">
  <h1 class="welcome__title">
    Welcome to slideshow
  </h1>
  <figure class="welcome__image">
    <Symbol/>
  </figure>
  <p class="welcome__description">
    슬라이드쇼 계정을 만듭니다.
  </p>
  <nav class="welcome__nav">
    <button type="button" @click="emits('close')">
      취소
    </button>
    <button type="button" @click="emits('submit')">
      계정 만들기
    </button>
  </nav>
</article>
</template>

<script setup>
import { watch, onMounted, onUnmounted } from 'vue'
import Symbol from '../layout/symbol.vue'

const emits = defineEmits([ 'close', 'submit' ])
</script>

<style src="./welcome.scss" lang="scss" scoped></style>
