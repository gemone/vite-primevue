import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import routes from './routes';

const createHistory =
  import.meta.env.VITE_ROUTER_HISTORY_MODE === 'history' ? createWebHistory : createWebHashHistory;

export default createRouter({
  scrollBehavior: () => ({
    left: 0,
    right: 0,
  }),
  routes,
  history: createHistory(import.meta.env.SSR ? void 0 : import.meta.env.VITE_ROUTER_BASE),
});
