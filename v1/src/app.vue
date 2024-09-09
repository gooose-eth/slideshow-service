<template>
<ServiceError
  v-if="serviceError"
  :status="serviceError.status"
  :message="serviceError.message"
  class="service-error"/>
<component v-else-if="layout" :is="layout">
  <router-view/>
</component>
</template>

<script setup>
import { ref, computed, nextTick, onErrorCaptured } from 'vue'
import { useRoute } from 'vue-router'
import _router from './router'
import { serviceStore } from './store/service.js'
import { CODE } from './libs/error.js'
import LayoutDefault from './layouts/default.vue'
import LayoutSlideshow from './layouts/slideshow.vue'
import LayoutBlank from './layouts/blank.vue'
import ServiceError from './components/error/service.vue'

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
  if (service.dev) console.error('onErrorCaptured', e)
  let status = 500
  let message = (typeof e === 'string') ? e : e.message
  switch (message)
  {
    default:
    case CODE['INVALID-SLIDESHOW-DATA']:
      status = 500
      message = service.dev ? message : 'Unknown error'
      break
  }
  serviceError.value = {
    status,
    message,
  }
  return false
})

// change router event
_router.beforeEach(async (to, from) => {
  if (serviceError.value) location.reload()
})
</script>

<style lang="scss" scoped>
.error {
  height: 100vh;
  box-sizing: border-box;
}
</style>
