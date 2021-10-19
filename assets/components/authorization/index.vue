<template>
<article class="authorization" @click="emits('close')">
  <div class="authorization__wrap" @click.stop="">
    <h1 class="authorization__title">Authorization</h1>
    <form
      method="post"
      class="authorization__form"
      @submit.prevent="onSubmit">
      <div class="authorization__field">
        <label for="slideshow_id">Slideshow ID</label>
        <label class="authorization__input">
          <input
            type="text"
            name="slideshow_id"
            id="slideshow_id"
            maxlength="20"
            placeholder="Please input id."
            v-model="state.slideshowId">
        </label>
      </div>
      <div class="authorization__field">
        <label for="slideshow_password">Password</label>
        <label class="authorization__input">
          <input
            type="password"
            name="slideshow_password"
            id="slideshow_password"
            maxlength="24"
            placeholder="Please input password."
            v-model="state.slideshowPassword">
        </label>
      </div>
      <nav class="authorization__nav">
        <button type="submit">Submit</button>
        <button type="button">Close</button>
      </nav>
    </form>
  </div>
</article>
</template>

<script setup>
import { reactive, onUnmounted, onBeforeMount } from 'vue';
const props = defineProps({
  show: Boolean,
});
const emits = defineEmits([ 'close' ]);
let state = reactive({
  slideshowId: '',
  slideshowPassword: '',
});

/**
 * on submit
 */
function onSubmit(e)
{
  console.log('call onSubmit()')
}

// lifecycles
onBeforeMount(() => {
  document.querySelector('html').classList.add('mode-modal');
});
onUnmounted(() => {
  document.querySelector('html').classList.remove('mode-modal');
});
</script>

<style lang="scss">
@use '../../scss/mixins';

.authorization {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  cursor: not-allowed;
  &__wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    padding: 0 50px;
    background: #fff;
    letter-spacing: -1px;
    cursor: auto;
  }
  &__title {
    font-size: 32px;
    font-weight: 800;
    line-height: 1.15;
    text-align: center;
    user-select: none;
  }
  &__form {
    margin: 40px 0 0;
    width: 100%;
    max-width: 360px;
  }
  &__field {
    &:nth-child(n+2) {
      margin-top: 30px;
    }
    > label {
      font-size: 13px;
      letter-spacing: -.2px;
      color: var(--color-fill);
      line-height: 1.2;
      user-select: none;
    }
  }
  &__input {
    position: relative;
    display: block;
    margin: 8px 0 0;
    &:before,
    &:after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      pointer-events: none;
      height: 1px;
      width: 100%;
    }
    &:before {
      background: #bbb;
    }
    &:after {
      background: var(--color-key);
      transform-origin: 0 0;
      transform: scaleX(0);
      transition: transform 240ms ease-out;
    }
    &:focus-within {
      &:after {
        transform: scaleX(1);
      }
    }
    input {
      position: relative;
      display: block;
      width: 100%;
      height: 44px;
      font-weight: 500;
      font-size: 20px;
      &::placeholder {
        color: var(--color-shape);
      }
    }
  }
  &__nav {
    margin: 30px 0 0;
    button {
      display: block;
      padding: 0 32px;
      width: 100%;
      height: 44px;
      border-radius: 2px;
      color: var(--color-invert);
      border: none;
      -webkit-tap-highlight-color: transparent;
      cursor: pointer;
      font-size: 16px;
      letter-spacing: -.3px;
      text-align: center;
      user-select: none;
      @include mixins.focus(2px, 2px);
      &:nth-child(n+2) {
        margin-top: 8px;
      }
      &[type=button] {
        background: var(--color-shape-button);
      }
      &[type=submit] {
        background: var(--color-key);
      }
    }
  }
  @include mixins.responsive(tablet) {
    background: rgba(255,255,255,.75);
    @include mixins.background-blur(16px);
    display: flex;
    align-items: center;
    justify-content: center;
    &__wrap {
      height: auto;
      width: 100%;
      max-width: 400px;
      padding: 70px 50px 60px;
      border-radius: 8px;
      box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
