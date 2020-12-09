import { createRouter, createWebHistory } from 'vue-router';
import { routes } from './map'

const router = createRouter({
  // select router mode
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active'
});

export default router;