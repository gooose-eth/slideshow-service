<template>
<button
  type="button"
  :title="title"
  class="button-close"
  @click="$emit('close')">
  <Icon icon-name="x"/>
</button>
</template>

<script setup>
import Icon from '../Icon/index.vue';

const props = defineProps({ title: String });
const emits = defineEmits({ 'close': null });
</script>

<style lang="scss" scoped>
@use '../../../../assets/scss/mixin';
.button-close {
  display: block;
  width: var(--button-close-size, 48px);
  height: var(--button-close-size, 48px);
  margin: 0;
  padding: 0;
  font-size: 0;
  border: none;
  background: hsl(0 0% 98% / 75%);
  box-sizing: border-box;
  border-radius: 2px;
  transition: opacity 200ms ease-out;
  @include mixin.button-extends();
  @include mixin.background-blur(8px);
  --icon-color: var(--color-base);
  --icon-size: 36px;
  --icon-stroke: 1.25px;
  @include mixin.mouse-event(active) {
    opacity: .5;
  }
  &:focus-visible {
    box-shadow: 0 0 0 2px var(--color-key);
  }
  svg {
    display: block;
    margin: 0 auto;
  }
  @include mixin.responsive(tablet) {
    --button-close-size: 58px;
    .slideshow-icon {
      --icon-size: 52px;
      --icon-stroke: .75px;
    }
  }
  @include mixin.dark-mode() {
    background: rgba(34,34,34,.75);
  }
}
</style>
