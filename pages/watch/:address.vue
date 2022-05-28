<template>
<article v-if="isAuth">
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
    <Slideshow ref="$slideshow"/>
  </client-only>
</article>
<div v-else class="authorization-wrap">
  <Authorization
    ref="$authorization"
    mode="watch"
    :address="route.params.address"
    :show-close-button="false"
    :processing="processingAuth"
    @submit="onSubmitAuthorization"/>
</div>
</template>

<script lang="ts" setup>
import { serviceStore } from '~/store/service';
import { currentStore, dataStore, preferenceStore, usePreferenceStore } from '~/store/slideshow';
import { getStorage } from '~/libs/storage';
import { captureError, CODE } from '~/libs/error';
import Slideshow from '~/components/slideshow/index.vue';
import Authorization from '~/components/authorization/index.vue';

const $slideshow = ref();
const $authorization = ref();
const config = useRuntimeConfig();
const error = useError();
const route = useRoute();
const service = serviceStore();
const current = currentStore();
const data = dataStore();
const preference = preferenceStore();
const usePreference = usePreferenceStore();
const isAuth: any = ref(false);
const processingAuth: any = ref(false);

async function fetch(): Promise<any>
{
  let token: string;
  const { address } = route.params;
  if (process.server)
  {
    const cookie: any = useCookie(`${config.COOKIE_PREFIX}${address}`, {
      path: '/',
      httpOnly: true,
      secure: true,
      maxAge: 60 * 60 * 24 * config.COOKIE_AGE_DAY,
    });
    token = cookie.value?.token;
  }
  let { success, data, message } = await $fetch(`/api/slideshow/watch`, {
    method: 'post',
    responseType: 'json',
    body: {
      mode: 'fetch',
      address,
      token,
    },
  });
  if (!success) throw new Error(message);
  if (!data) return;
  await updateStore(data);
  isAuth.value = true;
}

async function onSubmitAuthorization(fields: { address: string, password: string }): Promise<void>
{
  try
  {
    processingAuth.value = true;
    const { address, password } = fields;
    let { success, message, data } = await $fetch('/api/slideshow/watch', {
      method: 'post',
      responseType: 'json',
      body: {
        mode: 'submit-authorization',
        address,
        password,
      },
    });
    if (!success) throw new Error(message);
    processingAuth.value = false;
    await updateStore(data);
    isAuth.value = true;
    await nextTick();
    current.loading = false;
  }
  catch(e)
  {
    if (CODE['NOT-MATCH-PASSWORD'] !== e.message)
    {
      captureError(['/pages/watch/:address.vue', 'onSubmitAuthorization()'], 'error', e.message);
    }
    alert('인증 실패했습니다.');
    processingAuth.value = false;
    $authorization.value.focusPassword();
  }
}

async function updateStore(item: any): Promise<void>
{
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
  data.field.public = item.public === 1;
  if (item.token) data.field.token = item.token;
  // current
  current.mode = 'watch';
  current.tree = item.slideshow.group;
  current.activeSlide = preference.slides.initialNumber;
  current.keyboardEvent = preference.keyboard.enabled;
  current.autoplay = preference.slides.autoplay;
}

function updateStoreFromStorage()
{
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
}

onMounted(async () => {
  await nextTick();
  if (isAuth.value)
  {
    updateStoreFromStorage();
    await nextTick();
  }
  current.loading = false;
});

// actions
definePageMeta({
  layout: 'slideshow',
});
await fetch();
</script>

<style src="./:address.scss" lang="scss" scoped/>
