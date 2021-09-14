import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import routers from 'routers';
import http from 'plugins/axios';

import App from './App.vue';

// css
import 'primeflex/primeflex.css';

const app = createApp(App);

app.use(routers);
app.use(PrimeVue);
app.use(http);
app.mount('#app');
