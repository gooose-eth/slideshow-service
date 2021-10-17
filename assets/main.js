import { createApp } from 'vue';

// stylesheet
import './scss/main.scss';
import './slideshow/assets/scss/app.scss';

/**
 * @var {object} window.Main
 */
const {} = window.Main;

// route
const routeMode = location.pathname.split('/')[1];
switch(routeMode)
{
  case 'watch':
  case 'create':
  case 'manage':
    import('./slideshow/main.vue').then(({ default: Main }) => {
      createApp(Main, { mode: routeMode }).mount('#slideshow');
    });
    break;
  default:
    import('./pages/index').then(({ default: index }) => index());
    break;
}
