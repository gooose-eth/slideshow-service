<template>
<article>
  <Html>
    <Head>
      <Title>{{data.field.title}} - 슬라이드쇼</Title>
      <Meta name="description" :content="data.field.description"/>
      <Meta property="og:title" :content="`${data.field.title} - 슬라이드쇼`"/>
      <Meta property="og:url" :content="`${service.url}/watch/${route.params.address}`"/>
      <Meta property="og:description" :content="data.field.description"/>
      <Meta v-if="!!data.field.thumbnail" property="og:image" :content="data.field.thumbnail"/>
      <Meta name="apple-mobile-web-app-title" :content="`${data.field.title} - 슬라이드쇼`"/>
    </Head>
  </Html>
  <client-only>
    <Slideshow ref="$slideshow" mode="watch"/>
  </client-only>
</article>
</template>

<script lang="ts" setup>
import { serviceStore } from '~/store/service';
import { currentStore, dataStore, preferenceStore, usePreferenceStore } from '~/store/slideshow';
import { getStorage } from '~/libs/storage';
import Slideshow from '~/components/slideshow/index.vue';

const $slideshow = ref();
const route = useRoute();
const service = serviceStore();
const current = currentStore();
const data = dataStore();
const preference = preferenceStore();
const usePreference = usePreferenceStore();

async function fetch(): Promise<any>
{
  const { address } = route.params;
  let { success, item, message } = await $fetch(`/api/slideshow/item`, {
    method: 'post',
    responseType: 'json',
    body: {
      address,
      field: 'address,title,description,slideshow,thumbnail,regdate,public',
    },
  });
  if (!success) throw new Error(message);
  // preference
  preference.general = item.slideshow.preference.general;
  preference.slides = item.slideshow.preference.slides;
  preference.style = item.slideshow.preference.style;
  preference.keyboard = item.slideshow.preference.keyboard;
  // use preference
  usePreference.setup('watch');
  // data
  data.groups = item.slideshow.tree;
  // fields
  data.field.address = item.address;
  data.field.title = item.title;
  data.field.description = item.description;
  data.field.regdate = item.regdate;
  data.field.thumbnail = item.thumbnail;
  data.field.public = item.public;
  // current
  current.mode = 'watch';
  current.tree = item.slideshow.group;
  current.activeSlide = preference.slides.initialNumber;
  current.keyboardEvent = preference.keyboard.enabled;
  current.autoplay = preference.slides.autoplay;
}

onMounted(async () => {
  await nextTick();
  const storage = getStorage(String(route.params.address));
  if (storage?.preference)
  {
    preference.general = storage.preference.general;
    preference.slides = storage.preference.slides;
    preference.style = storage.preference.style;
    preference.keyboard = storage.preference.keyboard;
  }
  if (storage?.current)
  {
    if (storage.current.tree) current.tree = storage.current.tree;
    if (storage.current.autoplay) current.autoplay = storage.current.autoplay;
  }
  await nextTick();
  current.loading = false;
});

// actions
definePageMeta({
  layout: 'slideshow',
});
await fetch();
</script>

<style lang="scss" scoped>
.debug {
  position: fixed;
  left: 30px;
  bottom: 30px;
  background: hsl(0 0% 0% / 75%);
  font-size: 13px;
  padding: 16px;
  pointer-events: none;
}
</style>
