<template>
<div v-if="serviceError"><pre>{{serviceError}}</pre></div>
<component v-else-if="layout" :is="layout">
  <router-view/>
</component>
</template>

<script setup>
import { ref, computed, onErrorCaptured } from 'vue'
import { useRoute } from 'vue-router'
import _router from './router'
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
onErrorCaptured((e) => {
  // if (service.dev) return true
  console.error('ERROR: onErrorCaptured', e)
  serviceError.value = (typeof e === 'string') ? { message: e } : { message: e.message }
  return false
})

// change router event
_router.beforeEach((to, from) => {
  if (serviceError.value) serviceError.value = undefined
})
</script>
