import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // This injects a fake 'process.env' object so old code doesn't crash!
    'process.env': {}
  }
})
