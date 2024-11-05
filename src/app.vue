<template>
<div class="app">
  <router-view/>
</div>
</template>

<script setup>
import { ref, computed, onErrorCaptured } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

// router
router.onError(e => {
  //
})
router.beforeEach((to, from) => {
  //
})
</script>

<style lang="scss" scoped>
//
</style>
