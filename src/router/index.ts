import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

// 指定 router 位置
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home.vue'),
  },
  {
    path: '/todolist',
    name: 'TodoList',
    component: () => import(/* webpackChunkName: "todolist" */ '../pages/TodoList.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue'),
  },
  {
    path: '/:notFound(.*)',
    name: 'Error',
    component: () => import(/* webpackChunkName: "error" */ '../pages/Error.vue'),
  },
];

const router = createRouter({
  // select router mode
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active'
});

export default router;