<template>
<Authorization
  v-if="state.authorization.visible"
  @submit="onSubmitAuthorization"
  @close="visibleAuthorization(false)"/>
</template>

<script setup>
import { reactive } from 'vue';
import Authorization from '../components/authorization/index.vue';

// set values
let state = reactive({
  authorization: reactive({
    visible: false,
  }),
});

/**
 * visible authorization
 *
 * @param {boolean} sw
 */
function visibleAuthorization(sw)
{
  state.authorization.visible = sw;
}

/**
 * on submit authorization
 */
function onSubmitAuthorization()
{
  console.log('onSubmitAuthorization');
}

defineExpose({
  visibleAuthorization,
});
</script>
