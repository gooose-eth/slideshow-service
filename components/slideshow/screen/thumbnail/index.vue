<template>
<article class="thumbnail" @click.stop="">
  <header v-if="title" class="thumbnail__header">
    <h1>{{title}}</h1>
    <p v-if="description">{{description}}</p>
  </header>
  <div class="thumbnail__body">
    <ul v-if="index.length > 0" class="thumbnail__index">
      <li v-for="(o,k) in index">
        <button
          type="button"
          :disabled="k === current.activeSlide"
          @click="onSelect(k)">
          <img :src="o.thumbnail" :alt="o.title"/>
        </button>
      </li>
    </ul>
    <div v-else class="thumbnail__empty">
      <Icon icon-name="frown"/>
      <p>슬라이드가 없습니다.</p>
    </div>
  </div>
  <ButtonClose
    title="닫기"
    class="thumbnail__close"
    @click="windows.thumbnail = false"/>
</article>
</template>

<script lang="ts" setup>
import { computed, onMounted, onUnmounted } from 'vue';
import { dataStore, currentStore, windowsStore } from '~/store/slideshow';
import { ButtonClose } from '../../components/button';
import Icon from '../../components/icon/index.vue';

const data = dataStore();
const current = currentStore();
const windows = windowsStore();
const title = computed(() => (data.groups[current.tree].name));
const description = computed(() => (data.groups[current.tree].description));
const index = computed(() => (data.groups[current.tree].slides));

function onSelect(n: number): void
{
  current.activeSlide = n;
  windows.thumbnail = false;
}

// TODO: 오토플레이 일시정지 기능처리
onMounted(() => {
  // if (local.slides) local.slides.pause(true);
});
onUnmounted(() => {
  // if (local.slides) local.slides.pause(false);
});
</script>

<style src="./index.scss" lang="scss" scoped></style>
