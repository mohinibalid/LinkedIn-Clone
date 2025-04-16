// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // ❌ REMOVE THIS unless you're deploying to GitHub Pages
  base: '/LinkedIn-Clone/',
})
