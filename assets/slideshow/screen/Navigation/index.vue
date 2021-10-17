<template>
<nav
  class="slideshow-navigation"
  @touchstart="onTouchStart"
  @click="onClickWrapper">
  <div
    v-if="true"
    class="slideshow-navigation__item">
    <button
      type="button"
      title="Save"
      @click="onClickSave">
      <Icon icon-name="save"/>
    </button>
  </div>
  <div
    v-if="computes.visibleAutoplay"
    class="slideshow-navigation__item">
    <button
      type="button"
      :title="t('base.autoplay')"
      :class="store.state.autoplay ? 'active' : ''"
      @click="onClickAutoplayButton">
      <Icon icon-name="play-circle"/>
    </button>
  </div>
  <div
    v-if="computes.visibleGroup"
    class="slideshow-navigation__item">
    <button
      type="button"
      :title="t('base.group')"
      @click="onClickGroup">
      <Icon icon-name="folder" class="folder"/>
    </button>
  </div>
  <div
    v-if="store.state.preference.general.visibleHudContents.menu"
    class="slideshow-navigation__item">
    <button
      type="button"
      :title="t('base.menu')"
      :class="state.activeMenu ? 'on' : ''"
      @click="onClickMenuButton">
      <Icon icon-name="menu"/>
    </button>
    <div
      :class="[
        'slideshow-navigation-context',
        state.activeMenu && 'slideshow-navigation-context--on',
      ]">
      <ul>
        <li>
          <button
            type="button"
            @click="onClickContextItem('preference')">
            {{t('base.preference')}}
          </button>
        </li>
        <li v-if="computes.visibleThumbnail">
          <button
            type="button"
            @click="onClickContextItem('thumbnail')">
            {{t('title.thumbnailView')}}
          </button>
        </li>
        <li>
          <button
            type="button"
            :class="[ state.activeFullscreen && 'on' ]"
            @click="onClickContextItem('fullscreen')">
            {{t('base.fullscreen')}}
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script setup>
import { reactive, computed, onMounted, onUnmounted } from 'vue';
import store from '../../store';
import i18n from '../../i18n';
import * as local from '../../libs/local';
import * as util from '../../libs/util';
import Icon from '../../components/Icon/index.vue';

const { t } = i18n.global;
let state = reactive({
  activeMenu: false,
  activeFullscreen: false,
});
let computes = reactive({
  visibleThumbnail: computed(() => {
    return store.state.slides && store.state.slides.length > 1;
  }),
  visibleAutoplay: computed(() => {
    const { slides, preference } = store.state;
    if (!preference.slides.autoplay) return false;
    return slides && slides.length > 0;
  }),
  visibleGroup: computed(() => {
    if (!store.state.preference.general.visibleHudContents.group) return false;
    return store.state.tree && Object.keys(store.state.tree).length > 1;
  }),
});

// private methods
function onClickAutoplayButton()
{
  if (local.slides) local.slides.autoplay();
}
function onClickMenuButton(e)
{
  if (e) e.stopPropagation();
  if (state.activeMenu)
  {
    switchActiveMenu(false);
  }
  else
  {
    window.on('click.navigationMenu', () => switchActiveMenu(false));
    switchActiveMenu(true);
  }
}
function switchActiveMenu(sw)
{
  state.activeMenu = sw;
  if (!sw) window.off('click.navigationMenu');
}
function onClickContextItem(key)
{
  switchActiveMenu(false);
  switch (key)
  {
    case 'preference':
      store.dispatch('changeMode', 'preference');
      break;
    case 'thumbnail':
      store.dispatch('changeMode', 'thumbnail');
      break;
    case 'fullscreen':
      util.fullscreen(!state.activeFullscreen);
      state.activeFullscreen = !state.activeFullscreen;
      break;
  }
}
function onTouchStart(e)
{
  if (e.touches && e.touches.length > 1) e.preventDefault();
}
function onClickWrapper(e)
{
  e.stopPropagation();
}
function onClickGroup()
{
  store.dispatch('changeMode', 'group');
}
function onClickSave()
{
  // TODO: 모달창 띄우기
  console.log('click save');
}

// public methods
function blur()
{
  switchActiveMenu(false);
}

// lifecycles
onMounted(() => {
  document.on('fullscreenchange.slideshow', () => {
    state.activeFullscreen = !!document.fullscreenElement;
  });
});
onUnmounted(() => {
  document.off('fullscreenchange.slideshow');
});

// set expose
defineExpose({
  blur,
});
</script>

<style lang="scss">
@use '../../assets/scss/mixins';
.slideshow-navigation {
  display: flex;
  &__item {
    &:nth-child(n+2) {
      margin-left: 1px;
    }
    > button {
      display: block;
      width: 48px;
      height: 48px;
      padding: 0;
      margin: 0;
      background: rgba(0,0,0,.4);
      border: none;
      font-size: 0;
      outline: none;
      cursor: pointer;
      transition: background-color var(--speed-button-active) ease-out;
      border-radius: 1px;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      &:active,
      &.on {
        background-color: rgba(0,0,0,.7);
      }
      &.active {
        background-color: var(--color-key);
      }
      > svg {
        display: block;
        margin: 0 auto;
        --icon-color: var(--color-invert);
        --icon-stroke: 1.5;
        --icon-size: 22px;
        &.folder {
          --icon-size: 20px;
        }
      }
    }
  }
  .slideshow--hover & {
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--speed-content-toggle) ease-out;
  }
  .slideshow--hover:hover & {
    opacity: unset;
    pointer-events: unset;
  }
  @include mixins.dark-mode() {
    &__item {
      > button {
        background: rgba(17,17,17,.4);
        &:active,
        &.on {
          background-color: rgba(17,17,17,.8);
        }
        &.active {
          background-color: var(--color-key);
        }
        > svg {
          --icon-color: var(--color-fill);
        }
      }
    }
  }
}
.slideshow-navigation-context {
  position: relative;
  user-select: none;
  ul {
    position: absolute;
    right: 0;
    top: 1px;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 160px;
    box-sizing: border-box;
    background-color: rgba(0,0,0,.7);
    border-radius: 1px;
    overflow: hidden;
    pointer-events: none;
    opacity: 0;
    transition: opacity var(--speed-button-active) ease-out;
  }
  li {
    &:nth-child(n+2) {
      border-top: 1px solid rgba(255,255,255,.1);
    }
  }
  button {
    display: block;
    width: 100%;
    height: 36px;
    box-sizing: border-box;
    padding: 0 16px;
    margin: 0;
    border: none;
    text-align: left;
    background-color: rgba(255,255,255,0);
    color: var(--color-invert);
    font-size: 13px;
    outline: none;
    transition: background-color var(--speed-button-active) ease-out;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    &.on,
    &:active {
      background-color: rgba(0,0,0,.2);
    }
  }
  &--on {
    ul {
      pointer-events: auto;
      opacity: 1;
    }
  }
  @include mixins.dark-mode() {
    ul {
      background-color: rgba(17,17,17,.7);
    }
    li {
      &:nth-child(n+2) {
        border-top: 1px solid rgba(255,255,255,.05);
      }
    }
    button {
      color: var(--color-fill);
      background-color: rgba(0,0,0,0);
      &.on,
      &:active {
        background-color: rgba(0,0,0,.2);
      }
    }
  }
}
</style>
