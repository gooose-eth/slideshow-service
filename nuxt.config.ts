import { defineNuxtConfig } from 'nuxt';

const { COOKIE_AGE_DAY, COOKIE_PREFIX, INDEX_SIZE } = process.env;

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  css: [
    '@/assets/scss/main.scss',
    '@/assets/scss/fonts.scss',
  ],
  buildModules: [
    '@pinia/nuxt',
  ],
  publicRuntimeConfig: {
    index: {
      size: Number(INDEX_SIZE),
    },
  },
  privateRuntimeConfig: {
    COOKIE_AGE_DAY: Number(COOKIE_AGE_DAY || 7),
    COOKIE_PREFIX,
  },
});
