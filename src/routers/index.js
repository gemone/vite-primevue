import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';

import routes from './routes';

// eslint-disable-next-line operator-linebreak
const createHistory =
  import.meta.env.VITE_ROUTER_HISTORY_MODE === 'history'
    ? createWebHistory
    : createWebHashHistory;

export default createRouter({
  scrollBehavior: () => ({
    left: 0,
    right: 0,
  }),
  routes,
  history: createHistory(
    import.meta.env.SSR ? undefined : import.meta.env.VITE_ROUTER_BASE,
  ),
});
