import { createApp } from 'vue';
import { createI18n } from 'vue-i18n/index';

// stylesheet
import './scss/app.scss';

console.log('=========>', createApp, '=======')

// route
const routeMode = location.pathname.split('/')[1];
switch(routeMode)
{
  case 'watch':
    console.log('watch');
    break;
  case 'create':
    console.log('watch');
    break;
  case 'manage':
    console.log('manage');
    break;
  default:
    console.log('index');
    break;
}


export default { foo: 'bar' }
