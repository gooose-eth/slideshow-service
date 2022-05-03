<template>
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  :aria-labelledby="props.iconName"
  fill="none"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon">
  <component :is="unit"/>
</svg>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import * as src from './src';

const name = 'Icon';
const props = defineProps<{
  iconName: string,
}>();
let unit = computed(() => {
  const comp = src[props.iconName];
  if (!comp) throw new Error('no icon source');
  return comp;
});
</script>

<style lang="scss" scoped>
.icon {
  display: block;
  width: var(--icon-size, 24px);
  height: var(--icon-size, 24px);
  stroke: var(--icon-color, var(--color-base));
  stroke-width: var(--icon-stroke, 2px);
}
</style>
