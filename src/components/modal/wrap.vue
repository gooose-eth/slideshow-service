<template>
<transition name="modal">
  <div
    v-if="props.visible"
    class="modal"
    @touchstart="onTouchStart"
    @click="emits('close')">
    <slot/>
  </div>
</transition>
</template>

<script setup>
import { watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  visible: Boolean,
})
const emits = defineEmits([ 'close' ])

function control(sw)
{
  document.querySelector('html').classList[sw ? 'add' : 'remove']('mode-modal')
}

function onTouchStart(e)
{
  if (e.touches && e.touches.length > 1) e.preventDefault();
}

watch(() => props.visible, value => control(value))
onMounted(() => control(props.visible))
onUnmounted(() => control(false))
</script>

<style src="./wrap.scss" lang="scss" scoped></style>
