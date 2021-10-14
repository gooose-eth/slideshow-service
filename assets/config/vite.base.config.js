import vue from '@vitejs/plugin-vue';
import { paths, fileName } from './options';

export default {
  build: {
    lib: {
      entry: paths.resolve(`main/${fileName}.js`),
      name: fileName,
      formats: [ 'es' ],
      fileName: (format) => `${fileName}.js`
    },
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          switch (assetInfo.name)
          {
            case 'style.css':
              return `${fileName}.css`;
            default:
              return assetInfo.name;
          }
        },
      },
    },
  },
  plugins: [
    vue(),
  ],
};
