import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is served from the domain root on Vercel and Render.
export default defineConfig({
  plugins: [react()],
  base: '/',
})
