import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const config = defineConfig(async ({ mode }) => {
  const { VITE_HOST, VITE_PORT, VITE_DIR_OUT } = Bun.env
  return {
    server: {
      host: VITE_HOST,
      port: Number(VITE_PORT),
      open: false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
    build: {
      outDir: VITE_DIR_OUT || 'dist',
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            const info = assetInfo.name.split('.')
            let ext = info[info.length - 1]
            if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(ext))
            {
              ext = 'images/'
            }
            else if (/css/.test(ext))
            {
              ext = 'css/'
            }
            else
            {
              ext = ''
            }
            return `assets/${ext}[name]-[hash][extname]`
          },
        },
      },
      minify: 'terser',
      terserOptions: {
        format: {
          comments: false,
        },
      },
    },
    define: {},
    plugins: [
      vue({
        template: {
          compilerOptions: {},
        },
      }),
    ],
  }
})

export default config
