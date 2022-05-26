<template>
<div class="loading">
  <template v-if="show">
    <Unit class="loading__unit"/>
    <p v-if="!!message" class="loading__message">{{props.message}}</p>
  </template>
</div>
</template>

<script lang="ts" setup>
import Unit from './unit.vue';
import { sleep } from '~/libs/util';

const props = defineProps<{
  message?: string
}>();
let show = ref(false);
let mounted = false;

onMounted(async (): Promise<void> => {
  mounted = true;
  await sleep(100);
  if (mounted) show.value = true;
});

onUnmounted((): void => {
  mounted = false;
});
</script>

<style lang="scss" scoped>
.loading {
  display: grid;
  place-content: center;
  height: 45vh;
  user-select: none;
  --loading-size: 50px;
  --loading-speed: 600ms;
  --loading-color: var(--color-key);
  &__unit {
    margin: 0 auto;
  }
  &__message {
    margin: 36px 0 0;
    font-size: 18px;
    font-weight: 400;
    color: var(--color-base);
  }
}
</style>
