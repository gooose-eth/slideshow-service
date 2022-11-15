<template>
<div class="loading">
  <template v-if="show">
    <Unit class="loading__unit"/>
    <p v-if="!!message" class="loading__message">
      {{props.message}}
    </p>
  </template>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Unit from './unit.vue'
import { sleep } from '../../libs/util'

const props = defineProps({
  message: String,
})
let show = ref(false)
let mounted = false

onMounted(async () => {
  mounted = true
  await sleep(100)
  if (mounted) show.value = true
})

onUnmounted(() => {
  mounted = false
})
</script>

<style lang="scss" scoped>
@use '../../assets/scss/mixins';
.loading {
  display: grid;
  place-content: center;
  height: calc(100vh - 360px);
  min-height: 320px;
  user-select: none;
  box-sizing: border-box;
  --loading-size: 50px;
  --loading-speed: 600ms;
  --loading-color: var(--color-key);
  &__unit {
    margin: 0 auto;
  }
  &__message {
    margin: 36px 0 0;
    font-size: 14px;
    font-weight: 400;
    color: var(--color-base);
  }
  @include mixins.responsive(tablet) {
    height: calc(100vh - 460px);
  }
}
</style>
