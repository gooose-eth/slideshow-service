<template>
<main class="slideshow">
  <Html
    :class="[
      'mode-slideshow',
      preference.style.screenColor && `theme-${preference.style.screenColor}`,
    ]">
    <Head>
      <Title>sdmikgsdg</Title>
    </Head>
    <Body/>
  </Html>
  <client-only>
    <slot/>
  </client-only>
</main>
</template>

<script lang="ts" setup>
import { preferenceStore, currentStore } from '~/store/slideshow';

const preference = preferenceStore();
const current = currentStore();
</script>

<style lang="scss">
html.mode-slideshow {
  overflow: hidden;
  body {
    position: fixed;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
    @supports (-webkit-touch-callout: none) {
      height: -webkit-fill-available;
    }
  }
}
</style>
<style src="./slideshow.scss" lang="scss" scoped></style>
