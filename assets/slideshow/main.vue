<template>
<Slideshow
  :mode="props.mode"
  :preference="state.preference"
  :usePreference="state.usePreference"
  :group="state.group"
  :tree="state.tree"
  @update-preference="onUpdatePreference"
  @update-tree="onUpdateTree"
  @update-group="onUpdateGroup"/>
</template>

<script setup>
import { reactive } from 'vue';
import Slideshow from '../slideshow/screen/App.vue';
import * as storage from './libs/storage';
import getInitializeData from './libs/getInitializeData';

// setup
storage.changePrefix('slideshowService');

// set values
const name = 'SlideshowContainer';
const props = defineProps({
  mode: String, // watch,create,manage
});
let state = reactive({
  ...getInitializeData(props.mode), // { preference, usePreference, tree, group }
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
</script>
