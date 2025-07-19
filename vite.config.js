import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/guptadevagya.github.io/',
  build: {
    outDir: 'docs',
  },
});
