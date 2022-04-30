<template>
<fieldset>
  <legend>information fields</legend>
  <div class="information">
    <figure>
      <picture v-if="screenColor === 'system'">
        <source :srcset="signatures.dark" media="(prefers-color-scheme: dark)">
        <img :src="signatures.light" alt="slideshow">
      </picture>
      <img v-else :src="signatures[screenColor]" alt="slideshow">
    </figure>
    <ul>
      <li>URL: <a :href="url" target="_blank">{{url}}</a></li>
      <li>{{t('base.version')}}: <strong>{{version}}</strong></li>
      <li>{{t('base.author')}}: <a href="https://redgoose.me" target="_blank">https://redgoose.me</a></li>
      <li>GitHub: <a href="https://github.com/redgoose-dev/slideshow-service" target="_blank">https://github.com/redgoose-dev/slideshow-service</a></li>
    </ul>
    <p v-html="t('description.information', { link: `<a href='https://github.com/redgoose-dev/slideshow-service/issues' target='_blank'>GitHub Issues</a>` })"/>
  </div>
</fieldset>
</template>

<script setup>
import i18n from '../../i18n';
import pkg from '../../../../package.json';
import store from '../../store';

const name = 'PreferenceInformation';
const { t } = i18n.global;
const version = pkg.version;
const { Custom } = window;
const signatures = {
  light: `${Custom.path}assets/images/signature-light.png`,
  dark: `${Custom.path}assets/images/signature-dark.png`,
};
const url = Custom.url;
const { screenColor } = store.state.preference.style;
</script>

<style src="./fieldset.scss" lang="scss" scoped></style>
<style lang="scss">
@use '../../assets/scss/mixins';
.information {
  > figure {
    margin: 20px 0;
    img {
      display: block;
      margin: 0 auto;
      max-width: 75%;
      zoom: .5;
    }
  }
  > p {
    margin: 20px 0;
    font-size: 14px;
    line-height: 1.45;
  }
  > ul {
    margin: 20px 0;
    padding: 0;
    list-style: none;
    font-size: 14px;
    line-height: 1.45;
    li {
      position: relative;
      padding: 0 0 0 20px;
      &:nth-child(n+2) {
        margin-top: 6px;
      }
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 4px;
        top: calc((14px * 1.45 * .5) - 2px);
        width: 5px;
        height: 5px;
        background: var(--color-low-fill);
        border-radius: 50%;
      }
    }
  }
  > * {
    &:first-child {
      margin-top: 0;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
