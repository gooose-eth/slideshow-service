<template>
<article class="groups">
  <header class="groups-header">
    <div class="groups-header__body">
      <h1>그룹 선택하기</h1>
      <p>사용할 슬라이드를 선택합니다.</p>
    </div>
    <button
      type="button"
      title="닫기"
      class="groups-header__close"
      @click="windows.group = false">
      <Icon icon-name="x"/>
    </button>
  </header>
  <div class="groups__body">
    <ul class="groups-index">
      <li v-for="item in index">
        <Item
          :src="item.src"
          :name="item.name"
          :description="item.description"
          :count="item.count"
          :selected="!!item.selected"
          @select="onClickChange(item.key)"/>
      </li>
    </ul>
  </div>
</article>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted } from 'vue';
import { dataStore, currentStore, windowsStore, preferenceStore } from '~/store/slideshow';
import { sleep } from '~/libs/util';
import Icon from '~/components/icon/index.vue';
import Item from './item.vue';

const emits = defineEmits([ 'change', 'close' ]);
const data = dataStore();
const current = currentStore();
const windows = windowsStore();
const preference = preferenceStore();
const index = computed(() => {
  return Object.keys(data.groups).map(key => {
    const item = data.groups[key];
    switch (typeof item)
    {
      case 'object':
        const slides = item.slides;
        if (!slides) return false;
        const firstSlide = (slides.length > 0) ? slides[0] : null;
        let src = firstSlide ? (firstSlide.thumbnail || firstSlide.src) : null;
        return {
          key,
          name: item.name,
          description: item.description,
          count: Array.isArray(item.slides) ? item.slides.length : undefined,
          src,
          selected: key === current.tree,
        };
      default:
        return false;
    }
  }).filter(Boolean);
});
let saveAutoplay = false;

async function onClickChange(key: string): Promise<void>
{
  if (!confirm('선택한 슬라이드로 사용할까요?\n슬라이드를 변경하면 다시 시작합니다.')) return;
  windows.group = false;
  current.loading = true;
  current.tree = key;
  current.activeSlide = 0;
  current.update('tree', key);
  await sleep(80);
  current.loading = false;
}

onMounted(() => {
  saveAutoplay = current.autoplay;
  current.autoplay = false;
});
onUnmounted(() => {
  current.autoplay = saveAutoplay;
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
