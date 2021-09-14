import { resolve } from 'path';
import { forIn } from 'lodash';

import { defineConfig } from 'vite';

// plugin
import vue from '@vitejs/plugin-vue';
import eslint from '@rollup/plugin-eslint';
import Components from 'unplugin-vue-components/vite';

// primevue
import { PrimeVueConfig } from './primevue.config';
import { PrimeVueResolverLocal } from './primevue.resolver';

// alias
import PathAlias from './.alias.json';
const alias = { ...PathAlias };
forIn(PathAlias, (rPath, name) => {
  alias[name] = resolve(rPath);
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // import primevue
    // config in .env config
    Components({
      resolvers: [PrimeVueResolverLocal(PrimeVueConfig)],
    }),
    {
      ...eslint(),
      enforce: 'pre',
      apply: 'build',
    },
  ],
  resolve: {
    alias,
  },
});
