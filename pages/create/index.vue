<template>
<article>
  <Html>
    <Head>
      <Title>슬라이드쇼 만들기</Title>
      <Meta name="description" content="새로운 슬라이드쇼를 만듭니다."/>
      <Meta property="og:title" content="슬라이드쇼 만들기"/>
      <Meta property="og:description" content="새로운 슬라이드쇼를 만듭니다."/>
    </Head>
  </Html>
  <client-only>
    <Slideshow ref="$slideshow"/>
  </client-only>
</article>
</template>

<script lang="ts" setup>
import { serviceStore } from '~/store/service';
import { currentStore, dataStore, preferenceStore, usePreferenceStore } from '~/store/slideshow';
import { pureObject } from '~/libs/object';
import * as defaults from '~/libs/defaults';
import Slideshow from '~/components/slideshow/index.vue';

const $slideshow = ref();
const service = serviceStore();
const preference = preferenceStore();
const usePreference = usePreferenceStore();
const data = dataStore();
const current = currentStore();
const def = pureObject(defaults);

// setup
preference.general = def.preference.general;
preference.slides = def.preference.slides;
preference.style = def.preference.style;
preference.keyboard = def.preference.keyboard;
data.groups = def.groups;
data.resetFields();
current.mode = 'create';
current.tree = 'default';
current.activeSlide = def.preference.slides.initialNumber;
current.keyboardEvent = def.preference.keyboard.enabled;
current.autoplay = def.preference.slides.autoplay;
current.loading = false;
usePreference.setup('create');

// actions
definePageMeta({
  layout: 'slideshow',
});
</script>
