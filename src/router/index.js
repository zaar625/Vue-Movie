import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Detail from '../views/detail/Detail.vue';
import Catalog from '../views/Catalog.vue';
// import MovieGrid from '../components/movie-grid/MovieGrid.vue';

const routes = [
  {
    path: '/',
    component: Home,
    name: 'home',
  },
  {
    path: '/movie',
    component: Catalog,
  },
  {
    path: '/tv',
    component: Catalog,
  },
  {
    path: '/movie/:id',
    component: Detail,
    name: 'movie',
  },
  {
    path: '/tv/:id',
    component: Detail,
    name: 'tv',
  },
  {
    path: '/:category/search/:keyword',
    component: Catalog,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
