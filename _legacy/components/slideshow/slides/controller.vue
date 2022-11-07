<template>
<nav class="controller">
  <button
    v-if="showPrev"
    type="button"
    :disabled="disabled"
    title="이전 슬라이드로 이동하기"
    class="prev"
    @click.prevent="$emit('click-prev')">
    <Icon icon-name="arrowLeft"/>
  </button>
  <button
    v-if="showNext"
    type="button"
    :disabled="disabled"
    title="다음 슬라이드로 이동하기"
    class="next"
    @click.prevent="$emit('click-next')">
    <Icon icon-name="arrowRight"/>
  </button>
</nav>
</template>

<script setup>
import Icon from '~/components/icon/index.vue';

const props = defineProps({
  showPrev: { type: Boolean, default: true },
  showNext: { type: Boolean, default: true },
  disabled: { type: Boolean, default: false },
});
const emits = defineEmits([ 'click-prev', 'click-next' ]);
</script>

<style src="./controller.scss" lang="scss" scoped></style>
