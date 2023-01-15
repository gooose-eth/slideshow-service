<template>
<article class="thumbnail" @click.stop="">
  <header v-if="title" class="thumbnail__header">
    <h2>{{title}}</h2>
    <p v-if="description">{{description}}</p>
  </header>
  <div class="thumbnail__body">
    <ul v-if="index.length > 0" class="thumbnail__index">
      <li v-for="(o,k) in index">
        <button
          type="button"
          :disabled="k === current.activeSlide"
          @click="onSelect(k)">
          <img :src="o.thumbnail || o.src" :alt="o.title" loading="lazy" :draggable="false"/>
        </button>
      </li>
    </ul>
    <div v-else class="thumbnail__empty">
      <Icon name="frown"/>
      <p>슬라이드가 없습니다.</p>
    </div>
  </div>
  <button
    type="button"
    title="닫기"
    class="thumbnail__close"
    @click="windows.thumbnail = false">
    <Icon name="x"/>
  </button>
</article>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { dataStore, currentStore, windowsStore } from '../../store/slideshow.js'
import Icon from '../../components/icon/index.vue'

const emits = defineEmits([ 'change' ])
const data = dataStore()
const current = currentStore()
const windows = windowsStore()
const title = computed(() => (data.groups[current.tree].name))
const description = computed(() => (data.groups[current.tree].description))
const index = computed(() => data.selected)
let saveAutoplay = false

function onSelect(n)
{
  windows.thumbnail = false
  emits('change', n)
}

onMounted(() => {
  saveAutoplay = current.autoplay
  current.autoplay = false
})
onUnmounted(() => {
  current.autoplay = saveAutoplay
})
</script>

<style src="./index.scss" lang="scss" scoped></style>
