<template>
<article class="authorization" @click="onClose">
  <div class="authorization__wrap" @click.stop="">
    <h1>Authorization</h1>
    <form>
      <div>
        <label for="slideshow_id">Slideshow ID</label>
        <p>
          <input
            type="text"
            name="slideshow_id"
            id="slideshow_id">
        </p>
      </div>
      <div>
        <label for="slideshow_password">Password</label>
        <p>
          <input
            type="password"
            name="slideshow_password"
            id="slideshow_password">
        </p>
      </div>
      <nav>
        <button type="submit">Submit</button>
      </nav>
    </form>
  </div>
</article>
</template>

<script setup>
import { onMounted, onUnmounted, onBeforeMount } from 'vue';
const props = defineProps({
  show: Boolean,
});
const emits = defineEmits([ 'close' ]);

function onClose()
{
  emits('close');
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
  background: var(--color-bg);
  &__wrap {
    height: 100%;
    background: gray;
  }
  @include mixins.responsive(tablet) {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,.75);
    @include mixins.background-blur(16px);
    &__wrap {
      height: auto;
      background: var(--color-bg);
    }
  }
}
</style>
