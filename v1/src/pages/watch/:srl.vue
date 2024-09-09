<template>
<Slideshow mode="watch" :src="item"/>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { $get } from '../../libs/api.js'
import Slideshow from '../../slideshow/index.vue'

const route = useRoute()
const item = ref(undefined)

// check srl
if (!(Number(route.params.srl) > 0))
{
  throw new Error('NO-SRL')
}

onMounted(async () => {
  const { srl } = route.params
  item.value = await $get(`/api/watch/${srl}/`)
})
</script>
