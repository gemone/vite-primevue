const routes = [
  {
    path: '/',
    name: 'IndexLayout',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      {
        path: '',
        name: 'IndexPage',
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },
];

export default routes;
