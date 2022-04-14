<template>
  <div>
    <p>===========></p>
    <p>{{layout}}</p>
    <router-view/>
  </div>
</template>

<script setup>
import { ref, computed, watch, onErrorCaptured, defineAsyncComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const { t } = useI18n();
const error = ref(null);
const layout = computed(() => {
  let layoutName = route.meta.layout || 'default';
  if (!route.name) return null;
  console.log('route-name:', route.name)
  console.log('layout:', layoutName);
  // TODO: 레이아웃이 깜빡이는 현상도 있을 수 있으니 이번에 해결해보자.
  return layoutName;
});

console.log('apppp', t('alert.completeRestore'));
</script>
