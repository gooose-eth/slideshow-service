<template>
<article class="agree">
  <header class="agree__header">
    <h1 class="agree__title">슬라이드쇼 등록약관</h1>
  </header>
  <div class="agree__body">
    <pre class="agree__text">{{text}}</pre>
  </div>
  <nav class="agree__nav">
    <ButtonBasic
      type="button"
      title="닫기"
      color="key"
      @click="emits('close')">
      닫기
    </ButtonBasic>
  </nav>
</article>
</template>

<script lang="ts" setup>
import { ButtonBasic } from '~/components/button';
import text from './agreement.txt?raw';

const emits = defineEmits([ 'close' ]);
</script>

<style src="./index.scss" lang="scss" scoped></style>
