import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

<<<<<<< HEAD
// Use this to handle React Router on Render
=======
>>>>>>> 700f22ab50fa22296361c699092950dbd4dff654
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
<<<<<<< HEAD
  base: '/', // <- IMPORTANT
=======
>>>>>>> 700f22ab50fa22296361c699092950dbd4dff654
  server: {
    port: 5173,
  }
});
