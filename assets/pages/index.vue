<template>
<Authorization
  v-if="state.showAuthorization"
  @close="visibleAuthorization(false)"/>
</template>

<script setup>
import { reactive } from 'vue';
import Authorization from '../components/authorization/index.vue';

// set values
let state = reactive({
  showAuthorization: false,
});

/**
 * visible authorization
 *
 * @param {boolean} sw
 */
function visibleAuthorization(sw)
{
  state.showAuthorization = sw;
}

defineExpose({
  visibleAuthorization,
});
</script>
