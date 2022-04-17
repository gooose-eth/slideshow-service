import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// docs: https://vitejs.dev/config

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    build: {
      outDir: 'assets/dist',
      lib: {
        entry: path.resolve(__dirname, 'assets/main.js'),
        formats: [ 'es' ],
        name: 'RedgooseApp',
        fileName: format => `app.${format}.js`,
      },
      minify: true,
      watch: {
        exclude: [
          'node_modules/**',
          'assets/dist/**',
        ],
      },
      rollupOptions: {},
      assetsDir: 'assets',
    },
    define: {
      // __VUE_I18N_FULL_INSTALL__: true,
      // __VUE_I18N_LEGACY_API__: true
    },
    plugins: [
      vue(),
    ],
  };
});
