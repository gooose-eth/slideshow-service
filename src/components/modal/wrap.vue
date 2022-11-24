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

<script setup>
const emits = defineEmits([ 'close' ])
const props = defineProps({
  fullScreen: Boolean,
})

function onTouchStart(e)
{
  if (e.touches && e.touches.length > 1) e.preventDefault()
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/mixins';
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
  @include mixins.responsive(tablet) {
    display: grid;
    place-content: center;
    background-color: hsl(var(--color-bg-hsl) / 75%);
    cursor: zoom-out;
    @include mixins.background-blur(8px);
    &--full {
      display: block;
      cursor: auto;
      background: none;
    }
  }
  @include mixins.dark-mode() {
    @include mixins.responsive(tablet) {
      background-color: hsl(0 0% 8% / 75%);
    }
  }
}
</style>
