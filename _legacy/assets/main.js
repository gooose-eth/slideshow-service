import { createApp } from 'vue';

// stylesheet
import './scss/main.scss';
import './slideshow/assets/scss/app.scss';

// route
const routeMode = location.pathname.split('/')[1];
switch(routeMode)
{
  case 'watch':
    if (!!window.Custom?.slideshow)
    {
      import('./slideshow/main.vue').then(({ default: Main }) => {
        createApp(Main, { mode: routeMode }).mount('#slideshow');
      });
    }
    else
    {
      import('./pages/auth.vue').then(({ default: Auth }) => {
        createApp(Auth, { mode: routeMode }).mount('#service');
      });
    }
    break;
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
