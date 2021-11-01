<template>
<article class="thumbnail" @touchstart="onTouchStart">
  <header v-if="computes.title" class="thumbnail__header">
    <h2>{{computes.title}}</h2>
    <p v-if="computes.description">{{computes.description}}</p>
  </header>
  <div class="thumbnail__body">
    <ul
      v-if="computes.index && computes.index.length > 0"
      class="thumbnail__index">
      <li v-for="(o,k) in computes.index">
        <button
          type="button"
          :disabled="k === store.state.activeSlide"
          @click="onSelect(k)">
          <img :src="o.thumbnail" :alt="o.title">
        </button>
      </li>
    </ul>
    <div v-else class="thumbnail__empty">
      <Icon icon-name="frown"/>
      <p>{{t('thumbnail.empty')}}</p>
    </div>
  </div>
  <ButtonClose
    :title="t('base.close')"
    class="thumbnail__close"
    @click="onClose"/>
</article>
</template>

<script setup>
import { reactive, computed, onMounted, onUnmounted } from 'vue';
import store from '../../store';
import i18n from '../../i18n';
import * as local from '../../libs/local';
import ButtonClose from '../../components/Button/Close.vue';
import Icon from '../../components/Icon/index.vue';

const { t } = i18n.global;
let computes = reactive({
  index: computed(() => {
    return store.state.slides.map(o => ({
      ...o,
      thumbnail: o.thumbnail || o.src,
    }));
  }),
  title: computed(() => {
    return store.state.tree[store.state.group].name;
  }),
  description: computed(() => {
    return store.state.tree[store.state.group].description;
  }),
});

// methods
function onSelect(n)
{
  if (local.slides) local.slides.change(n, 'none');
  store.dispatch('changeMode', null);
}
function onClose()
{
  store.dispatch('changeMode', null);
}
function onTouchStart(e)
{
  if (e.touches && e.touches.length > 1) e.preventDefault();
}

// lifecycles
onMounted(() => {
  if (local.slides) local.slides.pause(true);
});
onUnmounted(() => {
  if (local.slides) local.slides.pause(false);
});
</script>

<style lang="scss">
@use '../../assets/scss/mixins';

.thumbnail {
  box-sizing: border-box;
  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: var(--color-bg);
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  user-select: none;
  @include mixins.custom-scroll-style();
  &__header {
    margin: 0 auto;
    padding: 36px 16px 20px;
    text-align: center;
    max-width: 1000px;
    h2 {
      margin: 0 30px;
      font-size: 30px;
      letter-spacing: -.5px;
      line-height: 1.15;
      font-weight: 600;
      @include mixins.text-single-line();
    }
    p {
      margin: 4px auto 0;
      font-size: 11px;
      font-weight: 400;
      line-height: 1.15;
      letter-spacing: -.25px;
      max-width: 1000px;
      color: var(--color-low-fill);
      @include mixins.text-single-line();
    }
  }
  &__index {
    --column: 2;
    --gap: 2px;
    --item-height: 35vw;
    list-style: none;
    margin: 0 auto;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(var(--column), 1fr);
    gap: var(--gap);
    user-select: none;
    li {
      position: relative;
      height: var(--item-height);
      background: var(--color-shape);
    }
    button {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      font-size: 0;
      padding: 0;
      margin: 0;
      border: none;
      background: none;
      cursor: pointer;
      border-radius: 0;
      outline: none;
      -webkit-tap-highlight-color: transparent;
      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        cursor: default;
        border: 4px solid var(--color-key);
        pointer-events: none;
        box-sizing: border-box;
        opacity: 0;
      }
      &:before {
        transition: opacity var(--speed-button-active) ease-out;
        border-width: 2px;
      }
      &:focus:before {
        opacity: 1;
      }
      &:disabled {
        cursor: default;
        &:after {
          opacity: 1;
        }
      }
    }
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__empty {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    > svg {
      display: block;
      margin: 0 auto;
      --icon-stroke: .5;
      --icon-size: 100px;
      --icon-color: var(--color-fill);
    }
    > p {
      margin: 6px 0 0;
      text-align: center;
      font-size: 16px;
      letter-spacing: -.25px;
      font-weight: 600;
      line-height: 1.15;
    }
  }
  &__close {
    position: fixed;
    z-index: 2;
    top: 4px;
    right: 4px;
  }

  @include mixins.responsive(tablet) {
    padding: 30px;
    &__header {
      padding: 30px 0 32px;
      h2 {
        margin: 0 auto;
        font-size: 42px;
        letter-spacing: -1px;
      }
      p {
        font-size: 13px;
      }
    }
    &__index {
      --column: 3;
      --gap: 10px;
      --item-height: 22vw;
      button {
        &:after {
          border-width: 6px;
        }
        &:focus:before {
          border-width: 4px;
        }
      }
    }
    &__empty {
      > svg {
        --icon-size: 120px;
        --icon-stroke: .35;
      }
      > p {
        margin-top: 8px;
        font-size: 24px;
      }
    }
    &__close {
      top: 16px;
      right: 16px;
    }
  }
  @include mixins.responsive(desktop) {
    padding: 60px 64px;
    &__header {
      padding: 0 0 30px;
    }
    &__index {
      max-width: 1920px;
      --column: 4;
      --gap: 16px;
      --item-height: 16vw;
      li {
        max-height: 220px;
      }
    }
  }
  @include mixins.responsive(desktop-1440) {
    &__index {
      --column: 6;
      --item-height: 11vw;
    }
  }
}
</style>
