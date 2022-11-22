<template>
<Slideshow/>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { serviceStore } from '../../store/service.js'
import { watchItemStore, currentStore, dataStore, preferenceStore, usePreferenceStore } from '../../store/slideshow.js'
import { getStorage } from '../../libs/storage.js'
import { captureError, CODE } from '../../libs/error.js'
import { $get } from '../../libs/api.js'
import Slideshow from '../../slideshow/index.vue'

const route = useRoute()
const service = serviceStore()
const watchItem = watchItemStore()
const current = currentStore()
const data = dataStore()
const preference = preferenceStore()
const usePreference = usePreferenceStore()

// check srl
if (!(Number(route.params.srl) > 0))
{
  throw new Error('no-srl')
}

async function fetch()
{
  const { srl } = route.params
  const res = await $get(`/api/watch/${srl}/`)
  updateStore(res)
}

function updateStore(item)
{
  // item
  watchItem.srl = Number(item.srl)
  watchItem.title = item.title
  watchItem.description = item.description || ''
  watchItem.regdate = item.regdate
  watchItem.thumbnail = item.thumbnail || ''
  watchItem.admin = !!item.admin
  // preference
  preference.general = item.json.preference.general
  preference.slides = item.json.preference.slides
  preference.style = item.json.preference.style
  preference.keyboard = item.json.preference.keyboard
  // use preference
  usePreference.setup('watch')
  // data
  data.groups = item.json.tree
  // fields
  data.field.address = item.address
  data.field.title = item.title
  data.field.description = item.description
  data.field.regdate = item.regdate
  data.field.thumbnail = item.thumbnail
  data.field.public = item.public === 1
  if (item.token) data.field.token = item.token
  // current
  current.mode = 'watch'
  current.tree = item.json.group
  current.activeSlide = preference.slides.initialNumber
  current.keyboardEvent = preference.keyboard.enabled
  current.autoplay = preference.slides.autoplay
}

function updateStoreFromStorage()
{
  const storage = getStorage(String(route.params.srl))
  if (storage?.preference)
  {
    preference.general = storage.preference.general
    preference.slides = storage.preference.slides
    preference.style = storage.preference.style
    preference.keyboard = storage.preference.keyboard
  }
  if (storage?.current)
  {
    if (storage.current.tree) current.tree = storage.current.tree
    if (storage.current.autoplay) current.autoplay = storage.current.autoplay
  }
}

onMounted(async () => {
  await fetch()
  await nextTick()
  updateStoreFromStorage()
  await nextTick()
  current.loading = false
})
</script>
