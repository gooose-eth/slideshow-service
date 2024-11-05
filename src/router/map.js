const main = [
  {
    path: '/',
    name: 'home',
    meta: { active: 'home' },
    component: () => import('../pages/index.vue'),
  },
  {
    path: '/watch/:id/',
    name: 'watch',
    meta: { active: 'watch' },
    component: () => import('../pages/watch/index.vue'),
  },
]

const manager = [
  {
    path: '/slideshow/',
    meta: { active: 'home' },
  },
  {
    path: '/slideshow/:id/',
    meta: { active: 'slideshow' },
  },
  {
    path: '/slideshow/create/',
    meta: { active: 'slideshow' },
  },
  {
    path: '/slideshow/edit/:id/',
    meta: { active: 'slideshow' },
  },
  {
    path: '/slideshow/default/',
    meta: { active: 'slideshow' },
  },
  {
    path: '/slideshow/language/',
    meta: { active: 'slideshow' },
  },
  {
    path: '/setting/general/',
    meta: { active: 'setting' },
  },
  {
    path: '/setting/auth/',
    meta: { active: 'setting' },
  },
]

export default [
  ...main,
  {
    path: '/manager/',
    name: 'manager',
    meta: { active: 'slideshow' },
    component: () => import('../pages/manager/slideshow/index.vue'),
    children: manager,
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    meta: { active: 'not-found' },
    component: () => import('../pages/error/404.vue'),
  },
]
