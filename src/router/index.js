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
    {
      path: '/manage/',
      name: 'Manage',
      component: () => import('../pages/manage/index.vue'),
      meta: { layout: 'default', active: 'manage' },
    },
    {
      path: '/manage/create/',
      name: 'Create',
      component: () => import('../pages/create/index.vue'),
      meta: { layout: 'slideshow', active: 'manage' },
    },
    {
      path: '/manage/edit/:srl/',
      name: 'Edit',
      component: () => import('../pages/edit/:address.vue'),
      meta: { layout: 'slideshow', active: 'manage' },
    },
  ],
})

export default router
