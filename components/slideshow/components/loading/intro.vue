<template>
<div class="loading-intro loading-intro--move">
  <template v-if="show">
    <Unit class="unit"/>
    <strong>슬라이드쇼 준비중..</strong>
  </template>
</div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as util from '../../libs/util';
import Unit from './unit.vue';

let show = ref(false);
let mounted = false;

// lifecycles
onMounted(() => {
  mounted = true;
  util.sleep(50).then(() => {
    if (mounted) show.value = true;
  });
});
onUnmounted(() => {
  mounted = false;
});
</script>

<style lang="scss" scoped>
@use '../../../../assets/scss/mixin';
.loading-intro {
  --loading-size: 50px;
  --loading-speed: 500ms;
  display: grid;
  height: 100%;
  place-content: center;
  place-items: center;
  user-select: none;
  box-sizing: border-box;
  strong {
    display: block;
    margin: 42px 0 0;
    font-size: 20px;
    font-weight: 200;
  }
  &--move {
    .unit {
      animation: loader 4000ms linear infinite;
      @keyframes loader {
        0% { left: -28vw; }
        100% { left: 28vw; }
      }
    }
  }
  @include mixin.responsive(tablet) {
    strong {
      margin: 48px 0 0;
      font-size: 24px;
    }
    &--move {
      .unit {
        @keyframes loader {
          0% { left: -160px; }
          100% { left: 160px; }
        }
      }
    }
  }
}
</style>
