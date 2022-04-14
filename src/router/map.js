

export default [
  {
    path: '/',
    name: 'Index',
    component: () => import('../pages/index.vue'),
    meta: { active: 'index' },
  },
  // body
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/error/404.vue'),
    meta: { layout: 'blank', active: 'service' },
  },
];
