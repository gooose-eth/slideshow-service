<template>
<article class="groups" @touchstart="onTouchStart" @click="onClose">
  <div class="groups__wrap" @click="e => { e.stopPropagation() }">
    <header class="groups-header">
      <div class="groups-header__body">
        <h2>{{t('title.selectGroup')}}</h2>
        <p>{{t('description.selectGroup')}}</p>
      </div>
      <nav class="groups-header__nav">
        <button
          type="button"
          :title="t('base.close')"
          @click="onClose">
          <Icon icon-name="x"/>
        </button>
      </nav>
    </header>
    <div class="groups__body">
      <ul class="groups-index">
        <li v-for="item in computes.index">
          <Item
            :key="item.key"
            :src="item.src"
            :name="item.name"
            :description="item.description"
            :count="item.count"
            :selected="item.selected"
            @select="onSelectSlide(item.key)"/>
        </li>
      </ul>
    </div>
  </div>
</article>
</template>

<script setup>
import { reactive, computed, onMounted, onUnmounted } from 'vue';
import store from '../../store';
import i18n from '../../i18n';
import * as local from '../../libs/local';
import Icon from '../../components/Icon/index.vue';
import Item from './Item.vue';

const { t } = i18n.global;
let computes = reactive({
  index: computed(() => {
    const { tree, group } = store.state;
    return Object.keys(tree).map(key => {
      switch (typeof tree[key])
      {
        case 'object':
          const slide = tree[key].slides;
          if (!slide) return false;
          const firstSlide = (slide && slide.length > 0) ? slide[0] : null;
          let src = firstSlide ? (firstSlide.thumbnail || firstSlide.src) : null;
          return {
            key,
            name: tree[key].name,
            description: tree[key].description,
            count: Array.isArray(tree[key].slides) ? tree[key].slides.length : undefined,
            src,
            selected: key === group,
          };
        default:
          return false;
      }
    }).filter(Boolean);
  }),
});

// methods
function onTouchStart(e)
{
  if (e.touches && e.touches.length > 1) e.preventDefault();
}
function onClose()
{
  store.dispatch('changeMode', null);
}
function onSelectSlide(key)
{
  if (!confirm(t('confirm.selectGroup'))) return;
  store.dispatch('changeGroup', key);
  store.dispatch('changeMode', null);
  local.main.update('group');
  local.main.restart();
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

.groups {
  --header-height: 48px;
  box-sizing: border-box;
  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: var(--color-bg);
  cursor: zoom-out;
  &__wrap {
    cursor: auto;
    height: 100%;
    box-sizing: border-box;
    overflow: hidden;
  }
  &__body {
    height: calc(100% - var(--header-height));
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    @include mixins.custom-scroll-style();
  }
  @include mixins.responsive(desktop) {
    --header-height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,.75);
    @supports (backdrop-filter: blur(30px)) {
      backdrop-filter: blur(30px);
    }
    &__wrap {
      width: 75vw;
      height: 75vh;
      max-width: 580px;
      max-height: 640px;
      margin: 0 auto;
      background-color: var(--color-bg);
      border-radius: 4px;
      box-shadow: 0 1px 30px 0 rgba(0,0,0,.3), 0 0 1px 0 rgba(0,0,0,.51);
    }
  }
  @include mixins.dark-mode() {
    @include mixins.responsive(desktop) {
      background: rgba(34,34,34,.75);
    }
  }
}

.groups-header {
  display: flex;
  align-items: center;
  height: var(--header-height);
  box-sizing: border-box;
  user-select: none;
  background-color: var(--color-bg);
  box-shadow: inset 0 -1px 0 0 var(--color-shape);
  &__body {
    flex: 1;
    padding: 0 0 0 20px;
    h2 {
      margin: 0;
      line-height: 1;
      font-size: 20px;
      font-weight: 700;
      letter-spacing: -.25px;
    }
    p {
      display: none;
    }
  }
  &__nav {
    button {
      display: block;
      width: calc(var(--header-height) - 4px);
      height: calc(var(--header-height) - 4px);
      margin: 2px;
      padding: 0;
      border: none;
      background: none;
      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      outline: none;
      border-radius: var(--size-shape-radius);
      transition: opacity var(--speed-button-active) ease-out;
      --icon-stroke: 1.5;
      --icon-size: 24px;
      --icon-color: var(--color-fill);
      &:active {
        opacity: .5;
      }
      &:focus {
        box-shadow: 0 0 0 2px var(--color-key);
      }
      svg {
        display: block;
        margin: 0 auto;
      }
    }
  }
  @include mixins.responsive(desktop) {
    &__body {
      padding-left: 30px;
      h2 {
        font-size: 30px;
        font-weight: 600;
        letter-spacing: -.5px;
      }
      p {
        display: block;
        margin: 4px 0 0;
        font-size: 12px;
        line-height: 1.15;
        color: var(--color-low-fill);
      }
    }
    &__nav {
      padding-right: 24px;
      button {
        width: 42px;
        height: 42px;
        margin: 0;
        --icon-size: 32px;
        --icon-stroke: 1.25;
      }
    }
  }
  @include mixins.dark-mode() {
    box-shadow: inset 0 -1px 0 0 var(--color-shape-button);
  }
}

.groups-index {
  margin: 0;
  padding: 20px;
  list-style: none;
  > li {
    &:nth-child(n+2) {
      margin-top: 10px;
    }
  }
  @include mixins.responsive(desktop) {
    padding: 30px;
  }
}
</style>
