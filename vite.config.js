import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import './migrate.mjs';

export default defineConfig({
  plugins: [react()],
});
