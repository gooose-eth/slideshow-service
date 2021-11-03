<template>
<Authorization
  v-if="state.authorization.visible"
  :mode="state.authorization.mode"
  @close="visibleAuthorization(false)"/>
</template>

<script setup>
import { reactive } from 'vue';
import Authorization from '../components/authorization/index.vue';

// set values
let state = reactive({
  authorization: reactive({
    visible: false,
    mode: '', // edit
  }),
});

/**
 * visible authorization
 *
 * @param {boolean} sw
 * @param {string} mode
 */
function visibleAuthorization(sw, mode)
{
  state.authorization.mode = mode;
  state.authorization.visible = sw;
}

defineExpose({
  visibleAuthorization,
});
</script>
