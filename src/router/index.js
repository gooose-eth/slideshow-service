import { createRouter, createWebHistory } from 'vue-router'
import map from './map.js'

const { VITE_LOCAL_PATH } = import.meta.env

const router = createRouter({
  history: createWebHistory(VITE_LOCAL_PATH || '/'),
  routes: map,
  scrollBehavior(to, from, savePosition)
  {
    if (savePosition) return savePosition
    window.scrollTo(0, 0)
  },
})

// route hook - before
router.beforeEach(async () => {
  //
})

// route hook - after
// router.afterEach((to, from) => {
//   console.log('afterEach()')
// })

export default router
