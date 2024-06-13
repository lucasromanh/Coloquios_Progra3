import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const coloquio = process.env.COLOQUIO || 'COLOQUIO_1';

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, `src/COLOQUIOS_PROGRA_3/${coloquio}`),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
  },
  server: {
    fs: {
      allow: ['..']
    }
  }
});
