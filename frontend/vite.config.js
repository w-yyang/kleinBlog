import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

const setAlias = (aliasArray) =>
  aliasArray.map((v) => {
    return { find: v[0], replacement: path.resolve(__dirname, v[1]) };
  });

export default defineConfig({
  plugins: [vue()],
  base: './',
  resolve: {
    alias: setAlias([['@', 'src']]),
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  }
});
