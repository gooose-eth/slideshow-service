<template>
<button
  type="button"
  :title="title"
  class="button-icon">
  <Icon :icon-name="iconName"/>
</button>
</template>

<script lang="ts" setup>
import Icon from '~/components/icon/index.vue';

const props = defineProps<{
  iconName: string,
  title: string,
}>();
</script>

<style lang="scss" scoped>
@use '../../../../../assets/scss/mixin';
.button-icon {
  --button-shadow-1: inset 0 0 12px hsl(0 0% 0% / 10%);
  --button-shadow-2: inset 0 0 0 1px hsl(0 0% 0% / 10%);
  --button-shadow-3: 0 0 0 2px hsl(0 0% 0% / 0%);
  display: block;
  width: var(--button-size, 40px);
  height: var(--button-size, 40px);
  margin: 0;
  padding: 0;
  font-size: 0;
  border: none;
  background: var(--button-bg, hsl(0 0% 67%));
  border-radius: 2px;
  box-sizing: border-box;
  box-shadow: var(--button-shadow-1), var(--button-shadow-2), var(--button-shadow-3);
  transition: box-shadow 120ms ease-out, filter 120ms ease-out;
  --icon-color: hsl(0 0% 100%);
  --icon-stroke: 1.75;
  --icon-size: 20px;
  @include mixin.button-extends();
  &:active {
    filter: brightness(110%);
  }
  &:focus-visible {
    --button-shadow-2: inset 0 0 0 1px hsl(0 0% 100% / 50%);
    --button-shadow-3: 0 0 0 3px hsl(var(--color-key-hsl) / 100%);
  }
  > svg {
    display: block;
    margin: 0 auto;
  }
  @include mixin.dark-mode() {
    --button-bg: hsl(0 0% 28%);
    &:active {
      filter: brightness(120%);
    }
    &:focus-visible {
      --button-shadow-2: inset 0 0 0 1px hsl(0 0% 0% / 50%);
    }
  }
}
</style>
