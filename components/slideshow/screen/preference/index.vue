<template>
<article
  class="preference"
  @click="onClose"
  @touchstart="onTouchStart">
  <div class="preference__wrap" @click.stop="">
    <Side/>
    <form class="preference__body" @submit="onSubmit">
      <header class="preference-header">
        <div class="preference-header__body">
          <h1>{{header.title}}</h1>
          <p>{{header.description}}</p>
        </div>
        <nav class="preference-header__nav">
          <button type="submit" title="적용하기" @click="onSubmit">
            <Icon icon-name="check"/>
          </button>
          <button type="button" title="닫기" @click="onClose">
            <Icon icon-name="x"/>
          </button>
        </nav>
      </header>
      <div ref="$content" class="preference__content">
        <component :is="bodyComponent"/>
      </div>
    </form>
  </div>
</article>
</template>

<script lang="ts" setup>
import { defineAsyncComponent, computed, onMounted, onUnmounted, watch, ref } from 'vue';
import { windowsStore, currentStore, readyPreferenceStore } from '~/store/slideshow';
import Icon from '../../components/icon/index.vue';
import Side from './side.vue';

const $content = ref();
const windows = windowsStore();
const current = currentStore();
const readyPreference = readyPreferenceStore();
const header = computed(() => {
  switch (readyPreference.tab)
  {
    case 'general':
    default:
      return {
        title: '기본',
        description: '기초적인 항목들을 설정합니다.',
      };
    case 'slides':
      return {
        title: '슬라이드',
        description: '슬라이드와 관련된 부분들을 설정합니다.',
      };
    case 'style':
      return {
        title: '스타일',
        description: '화면에 표시되는 부분들을 설정합니다.',
      };
    case 'data':
      return {
        title: '데이터',
        description: '슬라이드 데이터를 관리합니다.',
      };
    case 'keyboard':
      return {
        title: '키보드',
        description: '키보드 단축키에 관한 설정입니다.',
      };
    case 'information':
      return {
        title: '정보',
        description: '슬라이드쇼에 관한 정보를 확인할 수 있습니다.',
      };
  }
});
const bodyComponent: any = computed(() => {
  switch (readyPreference.tab)
  {
    case 'general':
      return defineAsyncComponent(() => import('./general.vue'));
    case 'slides':
      return defineAsyncComponent(() => import('./slides.vue'));
    case 'style':
      return defineAsyncComponent(() => import('./style.vue'));
    case 'data':
      return defineAsyncComponent(() => import('./data/index.vue'));
    case 'keyboard':
      return defineAsyncComponent(() => import('./keyboard.vue'));
    case 'information':
      return defineAsyncComponent(() => import('./information.vue'));
    default:
      return null;
  }
});

// setup store
readyPreference.setup();

// methods
function onTouchStart(e)
{
  if (e.touches && e.touches.length > 1) e.preventDefault();
}
function onClose()
{
  windows.preference = false;
}
function onSubmit(e)
{
  e.preventDefault();
  if (!confirm('슬라이드쇼가 재시작됩니다.\n적용하시겠습니까?')) return;
  try
  {
//     let tree = convertPureObject(state.structure.data.tree);
//     checkTree(tree);
//     let preference = {
//       general: convertPureObject(state.structure.general),
//       slides: convertPureObject(state.structure.slides),
//       style: convertPureObject(state.structure.style),
//       keyboard: convertPureObject(state.structure.keyboard),
//     };
//     if (!checkPreference(preference)) throw new Error('Bad preference data.');

//     // update store
//     store.dispatch('changePreference', preference);
//     store.dispatch('changeMode', null);
//     store.dispatch('changeActiveSlide', store.state.preference.slides.initialNumber);
//     store.dispatch('changeAutoplay', false);
//     store.commit('updateUseKeyboardEvent', true);
//     store.dispatch('changeTree', tree);
//     // check and update group
//     if (!Object.keys(tree).filter(key => (key === store.state.group)).length)
//     {
//       store.dispatch('changeGroup', Object.keys(tree)[0]);
//     }

//     // update or restart
//     if (local.useProps.preference || local.useProps.tree)
//     {
//       local.main.update('preference');
//       local.main.update('tree');
//     }
//     else
//     {
//       local.main.restart().then();
//     }
  }
  catch(e)
  {
    if (process.dev) console.error(e.message);
    alert('오류가 발생하여 적용하지 못했습니다.');
  }
}

// lifecycles
onMounted(() => {
  current.autoplay = false;
});
onUnmounted(() => {
  current.autoplay = true;
  readyPreference.destroy();
});

// watch
watch(() => readyPreference.tab, () => $content.value.scrollTo(0, 0));
</script>

<style src="./index.scss" lang="scss" scoped></style>
