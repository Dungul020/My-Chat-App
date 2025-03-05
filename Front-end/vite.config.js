import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],

  css: {
    postcss: './postcss.config.js',
  },


  server:{
    port:3000,
    proxy:{
      "/api":{
        target:"http://localhost:5000",
        changeOrigin: true,
      }
    }
  }
})


