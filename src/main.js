import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router/index.js'
import { initCustomEvent } from './libs/util.js'
import App from './app.vue'

// set stylesheet
import './assets/scss/main.scss'

// initialize custom event
initCustomEvent()

// setup pinia
const pinia = createPinia()

// render screen
const app = createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')

export default app
