<template>
<button
  :type="props.type"
  :class="[
    'app-button',
    props.color && `app-button--color-${props.color}`,
  ]"
  @click="emits('click')">
  <slot/>
</button>
</template>

<script setup>
const props = defineProps({
  type: { type: String, default: 'button' },
  color: String,
});
const emits = defineEmits([ 'click' ]);
</script>

<style lang="scss">
@use '../scss/mixins';

.app-button {
  display: block;
  padding: 0 32px;
  width: 100%;
  height: 48px;
  border-radius: 2px;
  color: var(--color-invert);
  border: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -.3px;
  text-align: center;
  user-select: none;
  @include mixins.focus(2px, 2px);
  transition: opacity 200ms ease-out;
  background: var(--color-shape-button);
  &:active {
    opacity: .5;
  }
  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }
  &--color {
    &-key {
      background: var(--color-key);
    }
    &-danger {
      background: var(--color-danger);
    }
  }
  @include mixins.dark-mode() {
    color: var(--color-fill);
  }
}
</style>
