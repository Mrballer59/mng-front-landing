import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [vue()],
  base:
    process.env.VITE_APP_ENV === 'staging'
      ? '/mng-landing-page/' // GitHub Pages path
      : '/', // Netlify will use root path
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
