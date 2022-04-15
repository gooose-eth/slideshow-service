import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import i18n from './i18n';
import { initCustomEvent } from './libs/util';
import { serviceStore } from './store/env';
import App from './app.vue';

// set stylesheet
import './assets/scss/main.scss';

/** @var {boolean} DEV */
/** @var {string} TITLE */

// set global values
window.DEV = !!DEV;

// set custom events
initCustomEvent();

// set component
const app = createApp(App, {})
  .use(createPinia())
  .use(router)
  .use(i18n)
  .mount('#app');

// set store
const service = serviceStore();
service.title = document.querySelector('title').text;

export default app;
