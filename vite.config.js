import { resolve } from 'path';

import { defineConfig } from 'vite';

// plugin
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';

// primevue
import { PrimeVueConfig } from './primevue.config';
import { PrimeVueResolverLocal } from './primevue.resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // import primevue
    // config in .env config
    Components({
      resolvers: [PrimeVueResolverLocal(PrimeVueConfig)],
    }),
  ],
  resolve: {
    alias: {
      root: resolve(__dirname),
      src: resolve(__dirname, 'src'),
      assets: resolve(__dirname, 'src/assets'),
      components: resolve(__dirname, 'src/components'),
      layouts: resolve(__dirname, 'src/layouts'),
      pages: resolve(__dirname, 'src/pages'),
      plugins: resolve(__dirname, 'src/plugins'),
      routers: resolve(__dirname, 'src/routers'),
    },
  },
});
