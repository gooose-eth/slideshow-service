<template>
<div v-if="serviceError">error</div>
<component v-else-if="layout" :is="layout">
  <router-view/>
</component>
</template>

<script setup>
import { ref, computed, onErrorCaptured } from 'vue'
import { useRoute } from 'vue-router'
import { serviceStore } from './store/service.js'
import LayoutDefault from './layouts/default.vue'
import LayoutSlideshow from './layouts/slideshow.vue'
import LayoutBlank from './layouts/blank.vue'

const route = useRoute()
const service = serviceStore()
const serviceError = ref(undefined)
const layout = computed(() => {
  let layoutName = route.meta.layout || undefined
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
if (!service.dev)
{
  onErrorCaptured((e) => {
    console.error('onErrorCaptured', e)
    // captureError([ 'app.vue', 'setup()' ], 'error', e)
    serviceError.value = (typeof e === 'string') ? { message: e } : { message: e.message }
    return false
  })
}
</script>
