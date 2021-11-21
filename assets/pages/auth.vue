<template>
<Authorization
  mode="watch"
  :address="state.address"
  @submit="onSubmit"/>
</template>

<script setup>
import { reactive } from 'vue';
import Authorization from '../components/authorization.vue';

const { address } = window.Custom;

// set values
let state = reactive({
  address,
});

/**
 * on submit
 *
 * @param {Event} e
 */
function onSubmit(e)
{
  //
}
</script>

<style lang="scss" scoped>

</style>
