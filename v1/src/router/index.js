import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../pages/home/index.vue'),
      meta: { layout: 'default', active: 'home' },
    },
    {
      path: '/watch/:srl/',
      name: 'Watch',
      component: () => import('../pages/watch/:srl.vue'),
      meta: { layout: 'slideshow', active: 'watch' },
    },
    {
      path: '/about/',
      name: 'About',
      component: () => import('../pages/about/index.vue'),
      meta: { layout: 'default', active: 'about' },
    },
  ],
})

export default router
