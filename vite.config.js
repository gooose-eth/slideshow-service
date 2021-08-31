import path from 'path';

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
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './assets'),
    },
  },
};
