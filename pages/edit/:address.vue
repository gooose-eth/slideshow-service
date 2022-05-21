<template>
<div :class="[ !isAuth && 'authorization-wrap' ]">
  <client-only v-if="isAuth">
    <Slideshow ref="$slideshow" mode="watch"/>
  </client-only>
  <Authorization
    v-else
    mode="edit"
    :address="route.params.address"
    :show-close-button="false"
    :processing="processingAuth"
    @submit="onSubmitAuthorization"/>
</div>
</template>

<script lang="ts" setup>
import { serviceStore } from '~/store/service';
import { currentStore, dataStore, preferenceStore, usePreferenceStore } from '~/store/slideshow';
import Slideshow from '~/components/slideshow/index.vue';
import Authorization from '~/components/authorization/index.vue';

const $slideshow = ref();
const route = useRoute();
const service = serviceStore();
const current = currentStore();
const data = dataStore();
const preference = preferenceStore();
const isAuth = ref(false);
const processingAuth = ref(false);

// TODO: 쿠키값 아이디어
// TODO: 인증에 필요한 토큰값을 만들지 못했기 때문에 패스워드를 활용해도 좋아보인다.
// TODO: 쿠키값의 형태는 key: `slideshow-{address}`, value: `{salt 앞에서 24자리}`
// TODO: salt 값을 이용하면 토큰이 진짜인지 진위여부를 알 수 있을것이다.

async function fetch(): Promise<any>
{
  const { address } = route.params;
  // TODO: 클라이언트 - 쿠키값 가져오기
  // TODO: 클라이언트 - 쿠키값이 없으면 인증 화면이 나오도록..
  // TODO: 클라이언트 - 쿠키값이 있으면 노드 영역으로 주소와 토큰값을 보내기
  // TODO: 노드 - 주소값으로 데이터 가져오기
  // TODO: 노드 - 데이터로 토큰값 진짜인지 검증하기 (쿠키값 아이디어 참고)
  // TODO: 노드 - 데이터 리턴하기
  // TODO: 클라이언트 - 받은 데이터로 스토어에 데이터 담기
  // TODO: 클라이언트 - isAuth 값 변경해서 슬라이드쇼가 나오도록 하기
}

async function onSubmitAuthorization(fields: { address: string, password: string }): Promise<void>
{
  try
  {
    processingAuth.value = true;
    console.log('onSubmitAuthorization()', fields);
    // TODO: 클라이언트 - 주소와 비밀번호를 노드 영역으로 보내기
    // TODO: 노드 - 주소로 db 데이터 가져와서 비밀번호 검사하기
    // TODO: 노드 - 비밀번호 검사 통과되었으면 쿠키등록
    // TODO: 노드 - 데이터 리턴하기
    // TODO: 클라이언트 - 받은 데이터로 스토어에 데이터 담기
    // TODO: 클라이언트 - isAuth 값 변경해서 슬라이드쇼가 나오도록 하기
    processingAuth.value = false;
  }
  catch (e)
  {
    //
    processingAuth.value = false;
  }
}

onMounted(async () => {
  //
});

// actions
definePageMeta({
  layout: 'slideshow',
});
await fetch();
</script>

<style src="./:address.scss" lang="scss" scoped/>
