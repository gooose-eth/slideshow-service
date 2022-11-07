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

<script lang="ts" setup>
const name = 'ButtonBasic';
const props = defineProps<{
  type: string // button,reset,submit
  title?: string
  color?: string // key
  disabled?: boolean
}>();
const emits = defineEmits([ 'click' ]);
</script>

<style src="./basic.scss" lang="scss" scoped></style>
