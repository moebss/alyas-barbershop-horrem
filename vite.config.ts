import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/alyas-barbershop-horrem/',
  server: {
    port: 8055,
    host: true
  }
});
