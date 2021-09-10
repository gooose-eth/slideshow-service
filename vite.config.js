import path from 'path';
import vue from '@vitejs/plugin-vue';

const __dirname = path.resolve();

export default {
  root: 'assets',
  build: {
    assetsDir: '',
    outDir: 'dist',
    sourcemap: false,
    lib: {
      entry: 'app.js',
      format: 'module',
      name: 'slideshow',
      fileName: (format) => 'app.js',
    },
    rollupOptions: {},
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './assets'),
    },
  },
  plugins: [
    vue(),
  ],
};
