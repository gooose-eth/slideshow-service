import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

// docs: https://vitejs.dev/config
export default defineConfig(async ({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    server: {
      // https://vitejs.dev/config/#server-options
      host: env.VITE_HOST,
      port: Number(env.VITE_PORT),
      open: env.VITE_OPEN_BROWSER === 'true',
    },
    build: {
      // https://vitejs.dev/config/#build-options
      outDir: env.VITE_OUT_DIR,
      rollupOptions: {},
    },
    define: {
      DEV: JSON.stringify(mode === 'development'),
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: true
    },
    plugins: [
      // https://vitejs.dev/guide/api-plugin.html
      vue({
        template: {
          compilerOptions: {
            // isCustomElement: tag => tag.startsWith('ext-'),
          },
        },
      }),
    ],
  };
});
