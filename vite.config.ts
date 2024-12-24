import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/imagine-cloud-web/', // URL base según el nombre del repositorio
});
