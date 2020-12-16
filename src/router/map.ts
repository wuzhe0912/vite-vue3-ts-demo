import { RouteRecordRaw } from 'vue-router';

// 指定 router 位置
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../pages/Home/index.vue'),
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: () => import(/* webpackChunkName: "favorites" */ '../pages/Favorites/index.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "test" */ '../pages/Test.vue'),
  },
  {
    path: '/todolist',
    name: 'TodoList',
    component: () => import(/* webpackChunkName: "todolist" */ '../pages/TodoList.vue'),
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import(/* webpackChunkName: "video" */ '../pages/Video.vue'),
  },
  {
    path: '/:notFound(.*)',
    name: 'Error',
    component: () => import(/* webpackChunkName: "error" */ '../pages/Error.vue'),
  },
];
