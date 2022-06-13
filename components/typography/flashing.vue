<template>
<transition name="flashing-text">
  <p v-if="show" class="flashing-text">
    <slot/>
  </p>
</transition>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
const props = defineProps<{ delay: number }>();
const show = ref(false);
defineExpose({
  trigger: () => {
    show.value = true;
    setTimeout(() => {
      show.value = false;
    }, props.delay + 500);
  },
});
</script>

<style lang="scss" scoped>
.flashing-text {
  user-select: none;
  &-enter-active,
  &-leave-active {
    transition: opacity 320ms ease-out;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>
