import react from '@vitejs/plugin-react';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true }),
  ],
  build: {
    outDir: 'dist', // Directory output bundle
    rollupOptions: {
      plugins: [visualizer()]
    },
    minify: true
  },
  server: {
    port: 3000, // Menentukan port untuk development server
    open: true  // Otomatis membuka browser setelah server dijalankan
  }
});