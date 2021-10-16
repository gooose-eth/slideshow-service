import { createApp } from 'vue';
import Slideshow from '../slideshow/screen/App.vue';

/**
 * slideshow
 *
 * @param {string} mode (watch|create|manage)
 * @param {object} options
 */
function slideshow(mode, options)
{
  // console.log('call slideshow', Slideshow);
  createApp(Slideshow).mount('#slideshow');
}

export { slideshow as default };
