import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './app.vue'

// set stylesheet
import './assets/scss/main.scss'

// setup pinia
const pinia = createPinia()

// render screen
const app = createApp(App)
  .use(pinia)
  .use(router)
  .mount('#app')

export default app
