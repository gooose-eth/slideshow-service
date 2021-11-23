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
  @delete="onVisibleDelete(true)"
  @save="onVisiblePost(true)"
  @logout="onLogout"/>
<teleport to="#service">
  <Post
    v-if="state.visiblePost"
    :mode="props.mode"
    :slideshow="state.slideshow"
    :form="state.post"
    @close="onClosePost"/>
  <Authorization
    v-if="state.visibleDelete"
    type="delete"
    mode="delete"
    @close="onVisibleDelete(false)"/>
</teleport>
</template>

<script setup>
import { reactive, ref } from 'vue';
import Slideshow from '../slideshow/screen/App.vue';
import Post from '../components/post.vue';
import Authorization from '../components/authorization.vue';
import * as storage from '../libs/storage';
import getInitializeData from './libs/getInitializeData';
import { convertPureObject } from './libs/object';
import { getFormData } from '../libs/object';

// set values
const slideshow = ref();
const { Custom } = window;
// set storage prefix
storage.changePrefix(Custom.address);
const name = 'SlideshowContainer';
const props = defineProps({
  mode: String, // watch,create,manage
});
let state = reactive({
  ...getInitializeData(props.mode), // { preference, usePreference, tree, group }
  visiblePost: false,
  visibleDelete: false,
  post: {
    key: null,
    title: '',
    description: '',
    password: '',
    thumbnail: '',
    address: '',
    visible: true,
    ...getFormData(Custom?.form),
  },
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

/**
 * on close post
 *
 * @param {object} src
 */
function onClosePost(src)
{
  state.post = {
    ...state.post,
    ...src,
  };
  onVisiblePost(false);
}

/**
 * visible delete
 *
 * @param {boolean} sw
 */
function onVisibleDelete(sw)
{
  slideshow.value.useKeyboardEvent(!sw);
  state.visibleDelete = sw;
}

defineExpose({
  slideshow,
})
</script>
