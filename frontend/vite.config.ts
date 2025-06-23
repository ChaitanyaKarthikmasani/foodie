import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Use this to handle React Router on Render
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  base: '/', // <- IMPORTANT
  server: {
    port: 5173,
  }
});
