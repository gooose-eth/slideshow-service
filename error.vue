<template>
<article>
  <h1>ERROR PAGE</h1>
  <pre>{{error.statusCode}} : {{labels[error.message]}}</pre>
</article>
</template>

<script lang="ts" setup>
import { labels } from '~/libs/error';
const error = useError();
</script>

<style lang="scss" scoped>
article {
  padding: 30px;
}
</style>
