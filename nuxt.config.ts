import { defineNuxtConfig } from 'nuxt';

// const { URL_BASE } = process.env;

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
    // URL_BASE,
  },
  privateRuntimeConfig: {},
});
