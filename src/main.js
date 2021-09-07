import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import routers from 'routers';
import http from 'plugins/axios';

import App from './App.vue';

// css
import 'primeflex/primeflex.css';

createApp(App).use(routers).use(PrimeVue).use(http)
  .mount('#app');
