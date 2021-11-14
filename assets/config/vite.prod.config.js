import { defineConfig, loadEnv } from 'vite';
import { paths, fileName } from './options.js';
import base from './vite.base.config';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    root: paths.root,
    base: './',
    build: {
      outDir: paths.dist,
      lib: {
        ...base.build.lib,
      },
      rollupOptions: {
        output: {
          ...base.build.rollupOptions.output,
        },
      },
    },
    plugins: [
      ...base.plugins,
    ],
  };
});
