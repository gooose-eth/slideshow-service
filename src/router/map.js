export default [
  {
    path: '/',
    name: 'layoutDefault',
    component: () => import('../layouts/default.vue'),
    children: [
      {
        path: '/',
        name: 'Index',
        component: () => import('../pages/index.vue'),
        meta: { active: 'index' },
      },
      {
        path: '/about/',
        name: 'About',
        component: () => import('../pages/about/index.vue'),
        meta: { active: 'about' },
      },
    ],
  },
  {
    path: '/',
    name: 'layoutSlideshow',
    component: () => import('../layouts/slideshow.vue'),
    children: [
      {
        path: '/create/',
        name: 'Create',
        component: () => import('../pages/create/index.vue'),
        meta: {},
      },
      {
        path: '/edit/:id',
        name: 'Edit',
        component: () => import('../pages/edit/:id.vue'),
        meta: {},
      },
      {
        path: '/watch/:id',
        name: 'Watch',
        component: () => import('../pages/watch/:id.vue'),
        meta: {},
      },
    ],
  },
  {
    path: '/',
    name: 'layoutEmpty',
    component: () => import('../layouts/empty.vue'),
    children: [
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../pages/error/404.vue'),
        meta: { active: 'service' },
      },
    ],
  },
];
