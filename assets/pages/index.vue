<template>
<Authorization
  v-if="state.authorization.visible"
  :title="state.authorization.title"
  @close="visibleAuthorization(false)"/>
</template>

<script setup>
import { reactive } from 'vue';
import Authorization from '../components/authorization/index.vue';

// set values
let state = reactive({
  authorization: reactive({
    visible: false,
    title: 'Authorization',
  }),
});

/**
 * visible authorization
 *
 * @param {boolean} sw
 * @param {string} title
 */
function visibleAuthorization(sw, title)
{
  state.authorization.visible = sw;
  if (title) state.authorization.title = title;
}

defineExpose({
  visibleAuthorization,
});
</script>
