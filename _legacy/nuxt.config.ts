import { defineNuxtConfig } from 'nuxt';

const {
  SERVICE_NAME, SERVICE_DESCRIPTION, SERVICE_URL,
  COOKIE_AGE_DAY, COOKIE_PREFIX,
  INDEX_SIZE,
  DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD, TIMEZONE_OFFSET,
  TIMEZONE,
} = process.env;

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
    SERVICE_NAME,
    SERVICE_DESCRIPTION,
    SERVICE_URL,
    index: {
      size: Number(INDEX_SIZE),
    },
  },
  privateRuntimeConfig: {
    COOKIE_AGE_DAY: Number(COOKIE_AGE_DAY || 7),
    COOKIE_PREFIX,
    DB: {
      host: DB_HOST,
      port: DB_PORT,
      database: DB_DATABASE,
      userName: DB_USERNAME,
      password: DB_PASSWORD,
      timezone: TIMEZONE_OFFSET,
    },
    TIMEZONE,
  },
});
