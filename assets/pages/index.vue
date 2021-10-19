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
  showAuthorization: true, // TODO: 작업을 위하여 true로 변경
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
