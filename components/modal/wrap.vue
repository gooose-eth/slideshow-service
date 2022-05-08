<template>
<div
  :class="[
    'modal-wrap',
    props.fullScreen && 'modal-wrap--full',
  ]"
  @touchstart="onTouchStart"
  @click="emits('close')">
  <slot/>
</div>
</template>

<script lang="ts" setup>
const emits = defineEmits([ 'close' ]);
const props = defineProps<{
  fullScreen?: boolean
}>();

function onTouchStart(e: TouchEvent): void
{
  if (e.touches && e.touches.length > 1) e.preventDefault();
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/mixin';
.modal-wrap {
  position: fixed;
  z-index: var(--modal-z-index, 100);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  display: block;
  background-color: var(--color-bg);
  @include mixin.responsive(tablet) {
    display: grid;
    place-content: center;
    background-color: hsl(var(--color-bg-hsl) / 75%);
    cursor: zoom-out;
    @include mixin.background-blur(8px);
    &--full {
      display: block;
      cursor: auto;
      background: none;
    }
  }
}
</style>
