import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages deployment configuration
export default defineConfig({
  plugins: [react()],
  base: '/disrepair-claims-app/'
})