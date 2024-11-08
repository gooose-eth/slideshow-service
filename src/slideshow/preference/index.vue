<template>
<article class="preference">
  <Side/>
  <form class="preference__body" @submit.prevent="onSubmit">
    <header class="preference-header">
      <div class="preference-header__body">
        <h1>{{header.title}}</h1>
        <p>{{header.description}}</p>
      </div>
      <nav class="preference-header__nav">
        <button type="submit" title="적용하기">
          <Icon name="check"/>
        </button>
        <button type="button" title="닫기" @click="onClose">
          <Icon name="x"/>
        </button>
      </nav>
    </header>
    <div ref="$content" class="preference__content">
      <component v-if="bodyComponent" :is="bodyComponent"/>
    </div>
  </form>
</article>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, defineAsyncComponent } from 'vue'
import { windowsStore, currentStore, preferenceStore, readyPreferenceStore, dataStore } from '../../store/slideshow.js'
import Icon from '../../components/icon/index.vue'
import Side from './side.vue'

const emits = defineEmits([ 'change', 'submit' ])
const $content = ref()
const windows = windowsStore()
const current = currentStore()
const preference = preferenceStore()
const readyPreference = readyPreferenceStore()
const data = dataStore()
const header = computed(() => {
  switch (readyPreference.tab)
  {
    case 'general':
    default:
      return {
        title: '기본',
        description: '기초적인 항목들을 설정합니다.',
      }
    case 'slides':
      return {
        title: '슬라이드',
        description: '슬라이드와 관련된 부분들을 설정합니다.',
      }
    case 'style':
      return {
        title: '스타일',
        description: '화면에 표시되는 부분들을 설정합니다.',
      }
    case 'data':
      return {
        title: '데이터',
        description: '슬라이드 데이터를 관리합니다.',
      }
    case 'keyboard':
      return {
        title: '키보드',
        description: '키보드 단축키에 관한 설정입니다.',
      }
    case 'information':
      return {
        title: '정보',
        description: '슬라이드쇼에 관한 정보를 확인할 수 있습니다.',
      }
  }
})
const bodyComponent = computed(() => {
  switch (readyPreference.tab)
  {
    case 'general':
      return defineAsyncComponent(() => import('./general.vue'))
    case 'slides':
      return defineAsyncComponent(() => import('./slides.vue'))
    case 'style':
      return defineAsyncComponent(() => import('./styles.vue'))
    case 'data':
      return defineAsyncComponent(() => import('./data/index.vue'))
    case 'keyboard':
      return defineAsyncComponent(() => import('./keyboard.vue'))
    case 'information':
      return defineAsyncComponent(() => import('./information.vue'))
    default:
      return null
  }
})
let saveAutoplay = false

// setup store
readyPreference.setup()

function onClose()
{
  windows.preference = false
}
async function onSubmit()
{
  if (!confirm('설정을 적용하시겠습니까?')) return
  onClose()
  emits('submit')
}

// lifecycles
onMounted(() => {
  saveAutoplay = current.autoplay
  current.autoplay = false
})
onUnmounted(() => {
  if (windows.preference) return
  current.autoplay = saveAutoplay
  readyPreference.destroy()
});

// watch
watch(() => readyPreference.tab, () => $content.value.scrollTo(0, 0))
</script>

<style src="./index.scss" lang="scss" scoped></style>
