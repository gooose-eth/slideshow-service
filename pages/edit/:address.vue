<template>
<div v-if="isAuth">
  <Html>
    <Head>
      <Title>슬라이드쇼 수정하기</Title>
    </Head>
  </Html>
  <client-only>
    <Slideshow ref="$slideshow"/>
  </client-only>
</div>
<div v-else class="authorization-wrap">
  <Authorization
    ref="$authorization"
    mode="edit"
    :address="route.params.address"
    :show-close-button="false"
    :processing="Boolean(processingAuth)"
    @submit="onSubmitAuthorization"/>
</div>
</template>

<script lang="ts" setup>
import { serviceStore } from '~/store/service';
import { currentStore, dataStore, preferenceStore, usePreferenceStore } from '~/store/slideshow';
import { captureError, CODE } from '~/libs/error';
import Slideshow from '~/components/slideshow/index.vue';
import Authorization from '~/components/authorization/index.vue';

const $slideshow = ref();
const $authorization = ref();
const config = useRuntimeConfig();
const route = useRoute();
const service = serviceStore();
const current = currentStore();
const data = dataStore();
const preference = preferenceStore();
const usePreference = usePreferenceStore();
const isAuth: any = ref(false);
const processingAuth = ref(false);

async function authorization(): Promise<any>
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
  let { success, message, data } = await $fetch('/api/slideshow/edit', {
    method: 'post',
    body: {
      mode: 'authorization',
      address,
      token,
    },
  });
  if (!success)
  {
    if (message === CODE['NO-TOKEN']) return;
    captureError(['/pages/edit/:address.vue', 'authorization()'], 'error', message);
    return;
  }
  await updateStore(data);
  isAuth.value = true;
}

async function onSubmitAuthorization(fields: { address: string, password: string }): Promise<void>
{
  try
  {
    processingAuth.value = true;
    const { address, password } = fields;
    let { success, message, item } = await $fetch('/api/slideshow/edit', {
      method: 'post',
      body: {
        mode: 'submit-authorization',
        address,
        password,
      },
    });
    if (!success) throw new Error(message);
    processingAuth.value = false;
    await updateStore(item);
    isAuth.value = true;
    await nextTick();
    current.loading = false;
  }
  catch (e)
  {
    if (CODE['NOT-MATCH-PASSWORD'] !== e.message)
    {
      captureError(['/pages/edit/:address.vue', 'onSubmitAuthorization()'], 'error', e.message);
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
  usePreference.setup('edit');
  // data
  data.groups = item.slideshow.tree;
  // fields
  data.field.address = item.address;
  data.field.title = item.title;
  data.field.description = item.description;
  data.field.regdate = item.regdate;
  data.field.thumbnail = item.thumbnail;
  data.field.public = item.public === 1;
  data.field.token = item.token;
  // current
  current.mode = 'edit';
  current.tree = item.slideshow.group;
  current.activeSlide = preference.slides.initialNumber;
  current.keyboardEvent = preference.keyboard.enabled;
  current.autoplay = preference.slides.autoplay;
}

onMounted(async () => {
  await nextTick();
  current.loading = false;
});

// actions
definePageMeta({
  layout: 'slideshow',
});
await authorization();
</script>

<style src="./:address.scss" lang="scss" scoped/>
