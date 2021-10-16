import { defineConfig, loadEnv } from 'vite';
import { paths, fileName } from './options';
import base from './vite.base.config';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    root: paths.root,
    base: './',
    build: {
      watch: {
        include: '../../assets/**',
        exclude: [ 'dist/**', 'node_modules/**' ],
      },
      minify: false,
      sourcemap: true,
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
