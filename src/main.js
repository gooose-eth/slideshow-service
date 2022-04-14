import { createApp } from 'vue';
import router from './router';
import i18n from './i18n';
import { initCustomEvent } from './libs/util';
import App from './app.vue';

// set stylesheet
import './assets/scss/main.scss';

// set global values
window.DEBUG = !!DEBUG;

// set custom events
initCustomEvent();

// set component
const app = createApp(App, {})
  .use(router)
  .use(i18n)
  .mount('#app');

export default app;
