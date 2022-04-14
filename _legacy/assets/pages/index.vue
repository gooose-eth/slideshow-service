<template>
<Authorization
  v-if="state.authorization.visible"
  :action="action"
  :mode="state.authorization.mode"
  @submit="submitAuthorization"
  @close="visibleAuthorization(false)"/>
</template>

<script setup>
import { reactive, computed } from 'vue';
import Authorization from '../components/authorization.vue';

// set values
const { Custom } = window;
let state = reactive({
  authorization: reactive({
    visible: false,
    mode: null,
  }),
});
let action = computed(() => {
  return `${Custom.path}${state.authorization.mode}/`;
});

/**
 * submit authorization
 *
 * @param {Event} e
 */
function submitAuthorization(e)
{
  e.target.submit();
}

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
