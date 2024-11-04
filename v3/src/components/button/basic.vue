<template>
<button
  :type="type"
  :disabled="disabled"
  :title="title"
  :class="[
    'button-basic',
    color && `button-basic--color-${color}`,
  ]"
  @click="emits('click')">
  <slot/>
</button>
</template>

<script setup>
const name = 'ButtonBasic'
const props = defineProps({
  type: { type: String, required: true }, // button,reset,submit
  title: String,
  color: String, // key
  disabled: Boolean,
})
const emits = defineEmits([ 'click' ])
</script>

<style src="./basic.scss" lang="scss" scoped></style>
