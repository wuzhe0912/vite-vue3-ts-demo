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
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "menu" */ '../pages/Menu.vue'),
  },
  {
    path: '/beauty',
    name: 'Beauty',
    component: () => import(/* webpackChunkName: "beauty" */ '../pages/Beauty.vue'),
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