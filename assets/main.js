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
    /**
     * @param {function} slideshow
     */
    import('./pages/slideshow').then(({ default: slideshow }) => {
      slideshow(routeMode, {});
    });
    break;
  default:
    import('./pages/index').then(({ default: index }) => index());
    break;
}
