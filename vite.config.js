import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// No proxy needed – Gemini API allows direct browser calls (no CORS issues)
export default defineConfig({
  base: '/My_Portfolio/',
  plugins: [react()],
})
