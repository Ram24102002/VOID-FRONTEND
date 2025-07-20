import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss(),react()],
  preview: {
    allowedHosts: ['void-fashion.onrender.com'],
    port: process.env.PORT || 4173,
    host: '0.0.0.0'
  }
})


