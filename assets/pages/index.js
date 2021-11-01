import { createApp } from 'vue';
import Index from './index.vue';

let vm;

/**
 * index page
 */
function index()
{
  // init button events
  initButtonEvents();
  // create vue component instance
  vm = createApp(Index, {}).mount('#service');
}

/**
 * initialize button events
 */
function initButtonEvents()
{
  function onClickEvent(e)
  {
    e.preventDefault();
    route(e.target.dataset?.link);
  }
  const $elements = document.querySelectorAll('[data-link]');
  for (const $element of $elements)
  {
    $element.addEventListener('click', onClickEvent);
  }
}

/**
 * route
 *
 * @param {string} key
 * */
function route(key)
{
  switch(key)
  {
    case 'manage':
      vm.visibleAuthorization(true);
      break;
  }
}

export default index;
