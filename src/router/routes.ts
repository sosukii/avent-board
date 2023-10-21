import { RouteRecordRaw } from 'vue-router';

export const ROUTES_NAMES = {
  MAIN: 'main',
  REGISTER: 'register',
  LOGIN: 'login',
  CART: 'cart',
  CATALOG: 'catalog',
  PROFILE: 'profile',
  NOT_FOUND: 'not-found',
} as const;

const routes: RouteRecordRaw[] = [
  {
    name: ROUTES_NAMES.MAIN,
    path: '/',
    meta: { title: 'Avent Company' },
    component: () => import('src/pages/index'),
  },
  {
    name: ROUTES_NAMES.REGISTER,
    path: '/register',
    meta: { title: 'Avent - Регистрация' },
    component: () => import('src/pages/registration'),
  },
  {
    name: ROUTES_NAMES.LOGIN,
    path: '/login',
    meta: { title: 'Avent - Логин' },
    component: () => import('src/pages/login'),
  },
  {
    name: ROUTES_NAMES.PROFILE,
    path: '/profile',
    meta: { title: 'Личный кабинет - Avent' },
    component: () => import('src/pages/profile'),
  },
  {
    name: ROUTES_NAMES.CART,
    path: '/cart',
    meta: { title: 'Avent - Моя корзина' },
    component: () => import('src/pages/cart'),
  },
  {
    name: ROUTES_NAMES.CATALOG,
    path: '/catalog',
    meta: { title: 'Avent - Каталог' },
    component: () => import('src/pages/catalog'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/notFound'),
  },
];

export default routes;
