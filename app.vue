<template>
<nuxt-layout>
  <Html lang="ko">
    <Head>
      <Title>{{service.title}}</Title>
      <Meta name="keyword" content="붉은거위, 슬라이드쇼, 슬라이드, 이미지, 사진, 이미지 슬라이드, 사진 슬라이드, 레드구스, redgoose, slideshow, 갤러리, gallery, slide, photography, photo slideshow"/>
      <Meta name="description" :content="service.description"/>
      <Meta property="og:title" :content="service.title"/>
      <Meta property="og:site_name" :content="service.title"/>
      <Meta property="og:description" :content="service.description"/>
      <Meta property="og:url" :content="service.url"/>
      <Meta property="og:locale" content="ko_kr"/>
      <Meta property="og:type" content="website"/>
      <Meta property="og:image" content="/images/head/slideshow-banner.png"/>
      <Meta name="apple-mobile-web-app-title" :content="service.title"/>
      <Meta name="apple-mobile-web-app-capable" content="yes"/>
      <Meta name="mobile-web-app-capable" content="yes"/>
      <Meta name="theme-color" content="currentColor"/>
      <Link rel="shortcut icon" href="/favicon.ico"/>
      <Link rel="icon" type="image/x-icon" href="/images/head/app-icon.png"/>
      <Link rel="apple-touch-icon" href="/images/head/slideshow-512x512.png"/>
      <Link rel="apple-touch-startup-image" href="/images/head/slideshow-512x512.png"/>
      <Link rel="manifest" href="/manifest.json"/>
    </Head>
    <Body ontouchstart=""/>
  </Html>
  <nuxt-page/>
</nuxt-layout>
</template>

<script lang="ts" setup>
import { initCustomEvent } from '~/libs/util';
import { serviceStore } from '~/store/service';

const nuxtApp = useNuxtApp();
const route = useRoute();
const service = serviceStore();

if (process.client) initCustomEvent();

function getRouteMode(): string
{
  switch (route.name)
  {
    case 'create':
      return route.name;
    default:
      return 'default';
  }
}

nuxtApp.hook('page:finish', (): void => {
  window.scrollTo(0, 0);
});

// setup
if (process.server) service.setup();
</script>
