import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: '../server/static'
  },
  server:{
    proxy:{
      '/api':{
        target:'http://localhost:3000'
      }
    }
  }
})
