<template>
<article class="error">
  <figure class="error__icon">
    <Icon v-if="props.type === 'empty'" icon-name="alertCircle"/>
    <Icon v-else icon-name="frown"/>
  </figure>
  <header class="error__header">
    <h1 class="error__title">Error</h1>
    <p class="error__message">{{props.message}}</p>
  </header>
</article>
</template>

<script lang="ts" setup>
import Icon from '~/components/icon/index.vue';
const props = defineProps<{
  type?: string
  message: string
}>();
</script>

<style lang="scss" scoped>
@use '../../assets/scss/mixin';
.error {
  display: grid;
  place-content: center;
  min-height: 50vh;
  &__icon {
    margin: 0;
    --icon-size: 80px;
    --icon-stroke: .5;
    --icon-color: var(--color-key);
    .icon {
      display: block;
      margin: 0 auto;
    }
  }
  &__header {
    margin: 20px 0 0;
    text-align: center;
    user-select: none;
  }
  &__title {
    margin: 0;
    font-size: 0;
  }
  &__message {
    margin: 0;
    font-size: 18px;
    line-height: 1.25;
    font-weight: 500;
    letter-spacing: -.25px;
  }
  @include mixin.responsive(tablet) {
    min-height: 58vh;
    &__icon {
      --icon-size: 120px;
    }
    &__header {
      margin-top: 24px;
    }
    &__message {
      font-size: 24px;
    }
  }
}
</style>

