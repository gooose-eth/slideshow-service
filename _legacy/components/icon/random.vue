<template>
<Icon v-if="!!iconName" :icon-name="iconName"/>
</template>

<script lang="ts" setup>
import Icon from './index.vue';

const list = [
  'x', 'cast', 'file', 'droplet', 'frown',
  'folder', 'database', 'file', 'copy', 'command',
  'battery', 'coffee', 'cloudRain', 'activity', 'key',
  'paperclip', 'server', 'star', 'sun', 'truck',
];
const iconName = ref();

onMounted(() => {
  iconName.value = list[Math.floor(Math.random() * list.length)];
});
</script>
