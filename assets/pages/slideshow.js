import { createApp } from 'vue';
import store from '@redgoose/slideshow/docs/bundle/store/index';
import i18n from '@redgoose/slideshow/docs/bundle/i18n/index';

/**
 * slideshow (watch, create, manage)
 *
 * @param {string} mode (watch, create, manage)
 */
function slideshow(mode)
{
  console.log('call slideshow');
  console.log('=========>', createApp, '=======')
}

export default slideshow;
