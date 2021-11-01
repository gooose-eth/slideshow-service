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
  @save="onVisiblePost(true)"/>
<teleport to="#service">
  <Post
    v-if="state.visiblePost"
    :mode="props.mode"
    :slideshow="state.slideshow"
    @close="onVisiblePost(false)"/>
</teleport>
</template>

<script setup>
import { reactive, ref } from 'vue';
import Slideshow from '../slideshow/screen/App.vue';
import Post from '../components/post/index.vue';
import * as storage from '../libs/storage';
import getInitializeData from './libs/getInitializeData';
import { convertPureObject } from './libs/object';

// set values
const slideshow = ref();
const { Custom } = window;
// set storage prefix
storage.changePrefix(Custom.id)
const name = 'SlideshowContainer';
const props = defineProps({
  mode: String, // watch,create,manage
});
let state = reactive({
  ...getInitializeData(props.mode), // { preference, usePreference, tree, group }
  visiblePost: false,
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
  if (props.mode === 'watch') storage.set('preference', res);
}

/**
 * on update tree
 *
 * @param {object} res
 */
function onUpdateTree(res)
{
  if (props.mode === 'watch') return;
  state.tree = res;
}

/**
 * on update group
 *
 * @param {string} res
 */
function onUpdateGroup(res)
{
  state.group = res;
  if (props.mode === 'watch') storage.set('group', res);
}

/**
 * on visible post
 *
 * @param {boolean} sw
 */
function onVisiblePost(sw)
{
  state.slideshow = sw ? convertPureObject({
    group: state.group,
    tree: state.tree,
    preference: state.preference,
  }) : null;
  state.visiblePost = sw;
  slideshow.value.useKeyboardEvent(!sw);
}

defineExpose({
  slideshow,
})
</script>
