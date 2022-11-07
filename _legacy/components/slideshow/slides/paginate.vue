<template>
<em class="slideshow-paginate">{{current + 1}} / {{total}}</em>
</template>

<script lang="ts" setup>
const props = defineProps<{
  total: number
  current: number
}>();
</script>

<style lang="scss" scoped>
.slideshow-paginate {
  font-style: normal;
  font-size: 13px;
  line-height: 1.15;
  letter-spacing: -.5px;
  @media (hover: hover) {
    .container--hover & {
      opacity: 0;
      pointer-events: none;
      transition: opacity 300ms ease-out;
    }
    .container--hover:hover & {
      opacity: unset;
      pointer-events: unset;
    }
  }
}
</style>
