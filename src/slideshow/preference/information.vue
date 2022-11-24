<template>
<fieldset>
  <legend>information fields</legend>
  <div class="information">
    <figure>
      <picture v-if="preference.style.screenColor === 'system'">
        <source :srcset="signatures.dark" media="(prefers-color-scheme: dark)">
        <img :src="signatures.light" alt="slideshow">
      </picture>
      <img v-else :src="signatures[preference.style.screenColor]" alt="slideshow">
    </figure>
    <ul>
      <li>URL: <a :href="service.url" target="_blank">{{service.url}}</a></li>
      <li>버전: <strong>{{version}}</strong></li>
      <li>제작자: <a href="https://redgoose.me" target="_blank">https://redgoose.me</a></li>
      <li>GitHub: <a href="https://github.com/redgoose-dev/slideshow-service" target="_blank">https://github.com/redgoose-dev/slideshow-service</a></li>
    </ul>
    <p>
      문제점이나 개선에 관한 의견이 있으면 <a href="mailto:scripter@me.com">scripter@me.com</a> 이메일을 보내주세요.
    </p>
  </div>
</fieldset>
</template>

<script setup>
import { preferenceStore } from '../../store/slideshow.js'
import { serviceStore } from '../../store/service.js'
import pkg from '../../../package.json'

const service = serviceStore()
const preference = preferenceStore()
const version = pkg.version
const signatures = {
  light: `/images/slideshow/signature-light.png`,
  dark: `/images/slideshow/signature-dark.png`,
}
</script>

<style src="./preference.scss" lang="scss" scoped></style>
<style src="./information.scss" lang="scss" scoped></style>
