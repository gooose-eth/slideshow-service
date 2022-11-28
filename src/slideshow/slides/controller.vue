<template>
<nav class="controller">
  <button
    v-if="props.showPrev"
    type="button"
    :disabled="props.disabled"
    title="이전 슬라이드로 이동하기"
    class="prev"
    @click.prevent="emits('click-prev')">
    <Icon name="chevron-left"/>
  </button>
  <button
    v-if="props.showNext"
    type="button"
    :disabled="props.disabled"
    title="다음 슬라이드로 이동하기"
    class="next"
    @click.prevent="emits('click-next')">
    <Icon name="chevron-right"/>
  </button>
</nav>
</template>

<script setup>
import Icon from '../../components/icon/index.vue'

const props = defineProps({
  showPrev: { type: Boolean, default: true },
  showNext: { type: Boolean, default: true },
  disabled: { type: Boolean, default: false },
})
const emits = defineEmits([ 'click-prev', 'click-next' ])
</script>

<style src="./controller.scss" lang="scss" scoped></style>
