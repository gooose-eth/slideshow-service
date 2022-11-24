<template>
<article
  class="slideshow-caption"
  :style="{
    '--caption-position-left': preference.style.captionPosition[0],
    '--caption-position-top': preference.style.captionPosition[1],
    '--caption-scale': preference.style.captionScale,
  }">
  <template v-if="preference.slides.captionAnimationType === 'shuffle'">
    <h1 v-if="!!data.slide.title" ref="$title"></h1>
    <pre v-if="!!data.slide.description" ref="$description"></pre>
  </template>
  <template v-else>
    <h1 v-if="!!data.slide.title">{{data.slide.title}}</h1>
    <pre v-if="!!data.slide.description">{{data.slide.description}}</pre>
  </template>
</article>
</template>

<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
import { currentStore, preferenceStore, dataStore } from '../../store/slideshow.js'
import shuffle from '../../libs/shuffle.js'

const $title = ref()
const $description = ref()
const current = currentStore()
const preference = preferenceStore()
const data = dataStore()
let interval = undefined

// methods
function playTransition(type)
{
  switch (type)
  {
    case 'shuffle':
      clearTimer()
      if ($description.value?.dataset.id)
      {
        clearInterval(Number($description.value.dataset.id))
        $description.value.innerText = ''
      }
      if (data.slide?.title)
      {
        shuffle($title.value, {
          text: data.slide.title,
          fps: preference.slides.captionAnimationSpeed,
          randomTextType: 'pattern',
        })
      }
      if (data.slide?.description)
      {
        interval = setTimeout(() => {
          clearTimer()
          shuffle($description.value, {
            text: data.slide?.description || '',
            fps: preference.slides.captionAnimationSpeed,
          })
        }, 300)
      }
      break
  }
}

function clearTimer()
{
  if (!interval) return
  clearTimeout(interval)
  interval = undefined
}

onMounted(() => {
  setTimeout(() => playTransition(preference.slides.captionAnimationType), 100)
})
watch(() => current.activeSlide, () => playTransition(preference.slides.captionAnimationType))
watch(() => preference.slides.captionAnimationType, value => {
  nextTick().then(() => playTransition(value))
})
</script>

<style src="./captions.scss" lang="scss" scoped></style>
