import slideshow from './pages/slideshow';
import index from './pages/index';

// stylesheet
import './scss/app.scss';

// route
const routeMode = location.pathname.split('/')[1];
switch(routeMode)
{
  case 'watch':
  case 'create':
  case 'manage':
    slideshow(routeMode);
    break;
  default:
    index();
    break;
}
