import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@@': path.resolve(__dirname, './public/sass'),
      'PROPS': path.resolve(__dirname, './public/properties') 
    }
  },
  server: {
    host: '0.0.0.0',
    port: 18900
  },
  plugins: [vue()]
})