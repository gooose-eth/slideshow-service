import vue from 'vue';

import '~/scss/app.scss';

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
