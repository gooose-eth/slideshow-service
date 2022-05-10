<template>
<div
  :class="[
    'slideshow-images',
    `animation--${preference.slides.animationType}`,
    !!preference.style.imageType && `type--${preference.style.imageType}`,
    state.playAnimation && 'play-animation',
    state.cancelAnimation && 'cancel-animation',
  ]"
  :style="containerStyle">
  <div ref="$wrap" class="wrap">
    <figure v-if="showFirstItem" class="first">
      <img
        v-if="state.loaded[data.slides.length-1]"
        :src="data.slides[data.slides.length-1].src"
        :alt="data.slides[data.slides.length-1].title">
    </figure>
    <figure
      v-for="(item, key) in data.slides"
      :ref="el => { $figures[key] = el }"
      :class="[
        (current.activeSlide === key && !!state.activeClassName) && state.activeClassName,
        (state.nextKey === key && !!state.nextClassName) && state.nextClassName,
      ]">
      <div v-if="state.error[key]" class="empty-image">
        <Icon icon-name="x"/>
        <strong>no image</strong>
      </div>
      <img
        v-else-if="state.loaded[key]"
        :src="item.src"
        :alt="item.title"
        @error="onErrorImage(key)">
    </figure>
    <figure v-if="showLastItem" class="last">
      <img
        v-if="state.loaded[0]"
        :src="data.slides[0].src"
        :alt="data.slides[0].title">
    </figure>
  </div>
  <i class="overlay"/>
</div>
</template>

<script lang="ts" setup>
import { ref, reactive, computed } from 'vue';
import { currentStore, dataStore, preferenceStore } from '~/store/slideshow';
import { setAreaTrue } from '~/libs/slideshow';
import { sleep } from '~/libs/util';
import Icon from '../icon/index.vue';

const current = currentStore();
const data = dataStore();
const preference = preferenceStore();

const props = defineProps({
  movePos: { type: Number, default: undefined },
});
const emits = defineEmits([ 'animation-control', 'change-active' ]);
let state = reactive({
  loaded: new Array(data.slides.length).fill(false), // 이미지 로드체크 목록
  error: new Array(data.slides.length).fill(false), // 이미지 에러체크 목록
  activeClassName: 'current',
  nextKey: undefined,
  nextClassName: undefined,
  playAnimation: false,
  cancelAnimation: false,
});
const containerStyle = computed(() => {
  let result = {
    '--speed-slide-animation': `${preference.slides.animationSpeed}ms`,
    '--image-size-width': preference.style.imageScale[0],
    '--image-size-height': preference.style.imageScale[1],
  };
  if (preference.slides.animationType === 'horizontal')
  {
    result[`--active-column`] = (state.nextKey !== undefined) ? state.nextKey : current.activeSlide;
    if (props.movePos !== undefined)
    {
      result['--move-pos'] = `${props.movePos}vw`;
    }
  }
  return result;
});
const showFirstItem = computed(() => {
  if (!preference.slides.loop) return false;
  if (data.slides.length <= 1) return false;
  return data.slides[data.slides.length-1] && preference.slides.animationType === 'horizontal';
});
const showLastItem = computed(() => {
  if (!preference.slides.loop) return false;
  if (data.slides.length <= 1) return false;
  return data.slides[0] && preference.slides.animationType === 'horizontal';
});
let _active = current.activeSlide;
const $figures = ref([]);
const $wrap = ref();
let $targetElement = null;

// set loaded
state.loaded[current.activeSlide] = true;
state.loaded = setAreaTrue(state.loaded, data.slides.length, current.activeSlide, preference.slides.loop);

// methods
async function play(n: number, userAnimationType: string = undefined): Promise<void>
{
  // set temp active
  _active = n;
  // play motion
  const type = userAnimationType !== undefined ? userAnimationType : preference.slides.animationType;
  // check loaded image
  if (!state.loaded[_active])
  {
    try
    {
      // TODO: 타입 확인해보고 조정하기
      await checkLoadImage(data.slides[_active].src);
      state.loaded[_active] = true;
    }
    catch(e)
    {
      state.error[_active] = true;
    }
  }
  // play transition
  switch (type)
  {
    case 'fade':
      if ($targetElement)
      {
        $targetElement.removeEventListener('transitionend', onTransitionEnd);
        $targetElement = null;
      }
      emits('animation-control', true);
      state.playAnimation = true;
      state.activeClassName = 'fadeout ready';
      state.nextKey = _active;
      state.nextClassName = 'fadein ready';
      await sleep(20);
      state.nextClassName = 'fadein';
      $targetElement = $figures.value[_active];
      $targetElement.addEventListener('transitionend', onTransitionEnd);
      break;
    case 'horizontal':
      emits('animation-control', true);
      state.playAnimation = true;
      if (preference.slides.loop)
      {
        if (current.activeSlide === 0 && _active >= data.slides.length - 1)
        {
          state.nextKey = -1;
        }
        else if (current.activeSlide >= data.slides.length - 1 && _active === 0)
        {
          state.nextKey = data.slides.length;
        }
        current.activeSlide = _active;
      }
      else
      {
        current.activeSlide = _active;
      }
      $wrap.value.addEventListener('transitionend', onTransitionEnd);
      break;
    case 'none':
    default:
      current.activeSlide = _active;
      state.loaded = setAreaTrue(state.loaded, data.slides.length, current.activeSlide, preference.slides.loop);
      break;
  }
}

function onTransitionEnd()
{
  switch (preference.slides.animationType)
  {
    case 'fade':
      state.playAnimation = false;
      state.nextKey = undefined;
      state.nextClassName = undefined;
      current.activeSlide = _active;
      state.activeClassName = 'current';
      state.loaded = setAreaTrue(state.loaded, data.slides.length, current.activeSlide, preference.slides.loop);
      if ($targetElement)
      {
        $targetElement.removeEventListener('transitionend', onTransitionEnd);
        $targetElement = null;
      }
      emits('animation-control', false);
      break;
    case 'horizontal':
      state.playAnimation = false;
      state.nextKey = undefined;
      state.loaded = setAreaTrue(state.loaded, data.slides.length, current.activeSlide, preference.slides.loop);
      $wrap.value.removeEventListener('transitionend', onTransitionEnd);
      emits('animation-control', false);
      break;
  }
}
async function cancel()
{
  if (state.playAnimation) return;
  emits('animation-control', true);
  state.cancelAnimation = true;
  $wrap.value.addEventListener('transitionend', onCancelTransitionEnd);
}

function onCancelTransitionEnd()
{
  state.cancelAnimation = false;
  $wrap.value.removeEventListener('transitionend', onCancelTransitionEnd);
  emits('animation-control', false);
}

function onErrorImage(key)
{
  state.error[key] = true;
}

function checkLoadImage(src): Promise<void>
{
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.onload = () => resolve();
    image.onerror = () => reject();
    image.src = src;
  });
}

// set expose
defineExpose({
  play,
  cancel,
});
</script>

<style src="./images.scss" lang="scss" scoped></style>
