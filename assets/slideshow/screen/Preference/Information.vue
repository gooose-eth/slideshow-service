<template>
<fieldset>
  <legend>information fields</legend>
  <div class="information">
    <figure>
      <picture>
        <source :srcset="signatures.dark" media="(prefers-color-scheme: dark)">
        <img :src="signatures.light" alt="slideshow">
      </picture>
    </figure>
    <ul>
      <li>URL: <a :href="url" target="_blank">{{url}}</a></li>
      <li>{{t('base.version')}}: <strong>{{version}}</strong></li>
      <li>{{t('base.author')}}: <a href="https://redgoose.me" target="_blank">https://redgoose.me</a></li>
      <li>GitHub/service: <a href="https://github.com/redgoose-dev/slideshow-service" target="_blank">https://github.com/redgoose-dev/slideshow-service</a></li>
      <li>GitHub/slideshow: <a href="https://github.com/redgoose-dev/slideshow" target="_blank">https://github.com/redgoose-dev/slideshow</a></li>
    </ul>
    <p v-html="t('description.information', { link: `<a href='https://github.com/redgoose-dev/slideshow-service/issues' target='_blank'>GitHub Issues</a>` })"/>
  </div>

</fieldset>
</template>

<script setup>
import i18n from '../../i18n';
import pkg from '../../../../package.json';

const name = 'PreferenceInformation';
const { t } = i18n.global;
const version = pkg.version;
const signatures = {
  light: `${window.Custom.path}assets/images/signature-dark.png`,
  dark: `${window.Custom.path}assets/images/signature-light.png`,
};
const url = window.Custom.url;
</script>

<style lang="scss">
@use './fieldset';
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
    line-height: 1.25;
  }
  > ul {
    margin: 20px 0;
    padding: 0;
    list-style: none;
    font-size: 14px;
    line-height: 1.8;
    li {
      position: relative;
      padding: 0 0 0 20px;
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 4px;
        top: 50%;
        width: 5px;
        height: 5px;
        background: var(--color-low-fill);
        transform: translateY(-50%);
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
