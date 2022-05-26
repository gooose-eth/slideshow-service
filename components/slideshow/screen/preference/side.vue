<template>
<aside class="preference-side">
  <nav>
    <button
      v-if="usePreference.general"
      type="button"
      title="기본"
      :disabled="readyPreference.tab === 'general'"
      class="preference-side__button"
      @click="readyPreference.tab = 'general'">
      <span>
        <Icon icon-name="tool"/>
        <em>기본</em>
      </span>
    </button>
    <button
      v-if="usePreference.slides"
      type="button"
      title="슬라이드"
      :disabled="readyPreference.tab === 'slides'"
      class="preference-side__button"
      @click="readyPreference.tab = 'slides'">
      <span>
        <Icon icon-name="copy"/>
        <em>슬라이드</em>
      </span>
    </button>
    <button
      v-if="usePreference.style"
      type="button"
      title="스타일"
      :disabled="readyPreference.tab === 'style'"
      class="preference-side__button"
      @click="readyPreference.tab = 'style'">
      <span>
        <Icon icon-name="droplet"/>
        <em>스타일</em>
      </span>
    </button>
    <button
      v-if="usePreference.data"
      type="button"
      title="데이터"
      :disabled="readyPreference.tab === 'data'"
      class="preference-side__button"
      @click="readyPreference.tab = 'data'">
      <span>
        <Icon icon-name="database"/>
        <em>데이터</em>
      </span>
    </button>
    <button
      v-if="usePreference.keyboard"
      type="button"
      title="키보드"
      :disabled="readyPreference.tab === 'keyboard'"
      class="preference-side__button"
      @click="readyPreference.tab = 'keyboard'">
      <span>
        <Icon icon-name="command"/>
        <em>키보드</em>
      </span>
    </button>
    <button
      v-if="usePreference.information"
      type="button"
      title="정보"
      :disabled="readyPreference.tab === 'information'"
      class="preference-side__button"
      @click="readyPreference.tab = 'information'">
      <span>
        <Icon icon-name="info"/>
        <em>정보</em>
      </span>
    </button>
  </nav>
</aside>
</template>

<script setup>
import Icon from '~/components/icon/index.vue';
import { usePreferenceStore, readyPreferenceStore } from '~/store/slideshow';

const usePreference = usePreferenceStore();
const readyPreference = readyPreferenceStore();
</script>

<style src="./side.scss" lang="scss" scoped></style>
