<template>
<LoadingIntro v-if="loading"/>
<Container v-else :error="error"/>
</template>

<script lang="ts" setup>
import { ref, reactive, getCurrentInstance, onMounted } from 'vue';
import LoadingIntro from './components/loading/intro.vue';
import Container from './screen/container.vue';

const loading = ref(true);
const error = ref(undefined);

onMounted(() => {
  loading.value = false;
});
</script>
