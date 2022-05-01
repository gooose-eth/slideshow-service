<template>
<article class="slideshow-empty" @click="onClickWrapper">
  <Icon icon-name="frown" class="slideshow-empty__icon"/>
  <h2 class="slideshow-empty__title">
    {{props.title}}
  </h2>
  <p class="slideshow-empty__description">
    {{props.description}}
  </p>
</article>
</template>

<script setup>
import { preferenceStore } from '~/store/slideshow';
import Icon from '../icon/index.vue';

const props = defineProps({
  title: { type: String, default: '빈 슬라이드' },
  description: { type: String, default: '환경설정에서 슬라이드를 추가해주세요.' },
});
const preference = preferenceStore();

// methods
function onClickWrapper()
{
  if (preference.general.clickVisibleHud)
  {
    // TODO: 토글 HUD
    // store.dispatch('changeHud');
  }
}
</script>

<style lang="scss" scoped>
@use '../../../../assets/scss/mixin';
.slideshow-empty {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: grid;
  place-content: center;
  place-items: center;
  padding: 0 0 30px;
  &__icon {
    margin: 0 auto;
    --icon-size: 80px;
    --icon-stroke: .75px;
  }
  &__title {
    margin: 8px 0 0;
    font-size: 32px;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -.5px;
  }
  &__description {
    margin: 2px 0 0;
    letter-spacing: -.25px;
    font-size: 13px;
    color: var(--color-low-fill);
  }
  @include mixin.responsive(tablet) {
    &__icon {
      --icon-size: 120px;
      --icon-stroke: .5px;
    }
    &__title {
      margin-top: 16px;
      font-size: 48px;
      letter-spacing: -1px;
    }
    &__description {
      margin-top: 4px;
      font-size: 14px;
    }
  }
}
</style>
