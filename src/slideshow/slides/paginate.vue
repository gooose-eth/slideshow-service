<template>
<em class="slideshow-paginate">{{props.current + 1}} / {{props.total}}</em>
</template>

<script setup>
const props = defineProps({
  total: Number,
  current: Number,
})
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
