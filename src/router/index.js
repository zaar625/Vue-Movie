import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Detail from '../views/detail/Detail.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/movie',
    component: Detail,
    name: 'movie',
  },
  {
    path: '/movie/:id',
    component: Detail,
    name: 'movie',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
