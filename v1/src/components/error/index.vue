<template>
<article class="error">
  <figure class="error__icon">
    <Icon v-if="props.type === 'empty'" name="alert-circle"/>
    <Icon v-else-if="props.type === 'permission'" name="alert-triangle"/>
    <Icon v-else name="frown"/>
  </figure>
  <header class="error__header">
    <h1 class="error__title">Error</h1>
    <p class="error__message">{{props.message}}</p>
  </header>
</article>
</template>

<script setup>
import Icon from '../icon/index.vue'

const props = defineProps({
  type: String,
  message: { type: String, required: true },
})
</script>

<style src="./index.scss" lang="scss" scoped></style>
