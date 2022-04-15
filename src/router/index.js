import { createRouter, createWebHistory } from 'vue-router';
import map from './map';

/** @var {Router} router */
const router = createRouter({
  history: createWebHistory('/'),
  routes: map,
});

// 라우트 업데이트 전 후크
router.beforeEach(async (to, from) => {
  return undefined;
});

// 업데이트 후 후크
// router.afterEach((to, from) => {
//   console.log('afterEach()');
// });

export default router;
