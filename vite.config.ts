import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // A relative base keeps assets working on GitHub Pages and on the custom domain.
  base: './',
  plugins: [react(), tailwindcss()],
})
