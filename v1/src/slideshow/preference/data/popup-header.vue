<template>
<header class="popup-header">
  <h1>{{props.title}}</h1>
  <button type="button" @click="emits('close')">
    <Icon name="x"/>
  </button>
</header>
</template>

<script setup>
import Icon from '../../../components/icon/index.vue'

const props = defineProps({
  title: { type: String, required: true },
})
const emits = defineEmits([ 'close' ])
</script>

<style lang="scss" scoped>
@use '../../../assets/scss/mixins';
.popup-header {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  height: 48px;
  background-color: hsl(0 0% 56%);
  h1 {
    margin: 0;
    padding: 0 0 0 20px;
    font-size: 18px;
    font-weight: 600;
    line-height: 1.25;
    color: #fff;
  }
  button {
    display: block;
    width: 48px;
    height: 48px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border-radius: 0;
    background: none;
    border: none;
    --icon-color: #fff;
    @include mixins.button-extends();
    &:active {
      opacity: .5;
    }
    svg {
      display: block;
      margin: 0 auto;
    }
  }
  @include mixins.dark-mode() {
    background-color: hsl(0 0% 25%);
  }
}
</style>
