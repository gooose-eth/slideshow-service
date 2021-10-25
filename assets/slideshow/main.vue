<template>
<Slideshow
  ref="slideshow"
  :mode="props.mode"
  :preference="state.preference"
  :usePreference="state.usePreference"
  :group="state.group"
  :tree="state.tree"
  @update-preference="onUpdatePreference"
  @update-tree="onUpdateTree"
  @update-group="onUpdateGroup"
  @save="onVisibleAuthorization(true)"/>
<teleport to="#service">
  <Authorization
    v-if="state.visibleAuthorization"
    :mode="props.mode"
    @submit="onSubmitInSave"
    @close="onVisibleAuthorization(false)"/>
  <Loading v-if="state.visibleLoading"/>
</teleport>
</template>

<script setup>
import { reactive, ref } from 'vue';
import Slideshow from '../slideshow/screen/App.vue';
import Authorization from '../components/authorization/index.vue';
import Loading from '../components/loading/index.vue';
import * as storage from './libs/storage';
import getInitializeData from './libs/getInitializeData';
import { get, post } from '../libs/fetch';

// setup
storage.changePrefix('slideshowService');

// set values
const slideshow = ref();
const name = 'SlideshowContainer';
const props = defineProps({
  mode: String, // watch,create,manage
});
let state = reactive({
  ...getInitializeData(props.mode), // { preference, usePreference, tree, group }
  visibleAuthorization: false,
  visibleLoading: false,
});

/**
 * on update preference
 *
 * @param {object} res
 */
function onUpdatePreference(res)
{
  state.preference = res;
  console.log('call onUpdatePreference()', res);
}

/**
 * on update tree
 *
 * @param {object} res
 */
function onUpdateTree(res)
{
  state.tree = res;
  console.log('call onUpdateTree()', res);
}

/**
 * on update group
 *
 * @param {string} res
 */
function onUpdateGroup(res)
{
  state.group = res;
  console.log('call onUpdateGroup()', res);
}

/**
 * on visible authorization
 *
 * @param {boolean} sw
 */
function onVisibleAuthorization(sw)
{
  state.visibleAuthorization = sw;
  slideshow.value.useKeyboardEvent(!sw);
}

/**
 * on submit in save component
 *
 * @param {object} src
 */
async function onSubmitInSave(src)
{
  try
  {
    onVisibleAuthorization(false);
    state.visibleLoading = true;
    // TODO: 로딩 표시하기
    // TODO: 모드에 따라 인증후의 일을 처리하기(create,manage)
    const res = await post('/create/', {
      id: src.id,
      password: src.password,
      slideshow: '',
    });
    state.visibleLoading = false;
    console.log(res);
  }
  catch (e)
  {
    // TODO: 오류처리
    console.log('ERROR: ', e);
  }
}

defineExpose({
  slideshow,
})
</script>
