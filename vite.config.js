import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ytechsity/',
  build: {
    rollupOptions: {
      external: ['react-scroll'],
    },
  },
})
