import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'./src'),
      '@images':path.resolve(__dirname,'./public/images/')
    }
  },
  css:{
    loaderOtions:{
      scss:{
        prependData:`
          @import "@/assets/styles/global.scss";
        `
      }
    }
  }
})
