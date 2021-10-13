import { createApp } from 'vue';
import { store, i18n } from '@redgoose/slideshow/docs/resource';
// import Slideshow from '@redgoose/slideshow';

/**
 * slideshow (watch, create, manage)
 *
 * @param {string} mode (watch, create, manage)
 */
function slideshow(mode)
{
  console.log('call slideshow');
  // console.log('=========>', createApp, '=======')
  console.log(store, i18n)
  // createApp()
}

export default slideshow;
