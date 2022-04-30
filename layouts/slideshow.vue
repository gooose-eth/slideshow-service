<template>
<main class="slideshow">
  <Html class="mode-slideshow">
    <Head>
      <Title>sdmikgsdg</Title>
    </Head>
    <Body/>
  </Html>
  <div class="container">
    <slot/>
  </div>
</main>
</template>

<script lang="ts" setup>
//
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
