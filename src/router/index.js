import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Detail from '../views/detail/Detail.vue';
import Catalog from '../views/Catalog.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/tv/:id',
    component: Detail,
    name: 'tv',
  },
  {
    path: '/movie/:id',
    component: Detail,
    name: 'movie',
  },
  {
    path: '/movie',
    component: Catalog,
    name: 'movie',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
