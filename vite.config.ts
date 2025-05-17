import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'
import path from 'node:path'
import tailwind from 'tailwindcss'
//import tailwindcss from '@tailwindcss/vite'
import autoprefixer from 'autoprefixer'
import { setup } from '@css-render/vue3-ssr'
import Components from 'unplugin-vue-components/vite'
import RekaResolver from 'reka-ui/resolver'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (element) => element.startsWith('iconify-icon'),
        },
      },
    }),
    vueDevTools(),
  ],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      //'@': path.resolve(__dirname, './src'),
    },
  },
})
