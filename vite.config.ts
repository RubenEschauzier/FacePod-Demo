// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/FacePod-Demo/',
  server: {
    watch: {
      usePolling: true
    }
  }
});