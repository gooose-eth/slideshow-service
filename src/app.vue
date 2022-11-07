<template>
<article>
  <router-view/>
</article>
</template>

<script setup>
import { ref, computed, onErrorCaptured } from 'vue'
import { useRoute } from 'vue-router'
import LayoutDefault from './layouts/default.vue'
import LayoutSlideshow from './layouts/slideshow.vue'
import LayoutBlank from './layouts/blank.vue'

const route = useRoute()
const serviceError = ref(undefined)
const layout = computed(() => {
  let layoutName = route.meta.layout || 'default'
  switch (layoutName) {
    case 'default':
      return LayoutDefault
    case 'slideshow':
      return LayoutSlideshow
    case 'blank':
    default:
      return LayoutBlank
  }
})

// children component error
if (!window.DEV)
{
  onErrorCaptured((e) => {
    console.error('onErrorCaptured', e)
  // captureError([ 'app.vue', 'setup()' ], 'error', e)
  // serviceError.value = (typeof e === 'string') ? { message: e } : { message: e.message }
  return false
})
}
</script>
