<template>
<article class="service-error">
  <div class="service-error__wrap">
    <figure>
      <Icon name="cloud-lightning"/>
    </figure>
    <h1>SERVICE ERROR</h1>
    <p>{{props.message}}</p>
  </div>
</article>
</template>

<script setup>
import Icon from '../icon/index.vue'

const props = defineProps({
  status: { type: Number, required: true },
  message: { type: String, required: true },
})
</script>

<style src="./service.scss" lang="scss" scoped></style>
