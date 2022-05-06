<template>
<div class="modal" @click="emits('close')">
  <div class="modal__wrap" @click.stop="">
    <slot/>
  </div>
</div>
</template>

<script lang="ts" setup>
const emits = defineEmits([ 'close' ]);
</script>

<style lang="scss" scoped>
@use '../../assets/scss/mixin';
.modal {
  position: fixed;
  z-index: var(--modal-z-index, 5);
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  box-sizing: border-box;
  cursor: zoom-out;
  display: grid;
  place-content: center;
  background-color: hsl(var(--color-bg-hsl) / 75%);
  @include mixin.background-blur(8px);
  &__wrap {
    cursor: auto;
  }
}
</style>
