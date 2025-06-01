import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/JCOportfolio-v1/',
  plugins: [
    tailwindcss(),
    react(),
  ],
  server: {
    host: '192.168.254.142',
    port: 5173,
  },
})
