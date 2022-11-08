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
      path: '/watch/:address/',
      name: 'Watch',
      component: () => import('../pages/watch/:address.vue'),
      meta: { layout: 'slideshow', active: 'watch' },
    },
    {
      path: '/create/',
      name: 'Create',
      component: () => import('../pages/create/index.vue'),
      meta: { layout: 'slideshow', active: 'create' },
    },
    {
      path: '/edit/:address/',
      name: 'Edit',
      component: () => import('../pages/edit/:address.vue'),
      meta: { layout: 'slideshow', active: 'edit' },
    },
    {
      path: '/about/',
      name: 'About',
      component: () => import('../pages/about/index.vue'),
      meta: { layout: 'default', active: 'about' },
    },
    // TODO: /register/
    {
      path: '/manage/',
      name: 'Manage',
      component: () => import('../pages/manage/index.vue'),
      meta: { layout: 'default', active: 'manage' },
    },
  ],
})

export default router
