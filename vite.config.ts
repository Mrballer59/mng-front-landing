import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

// Function to determine the base URL based on environment
const getBaseUrl = () => {
  // For production (Netlify), use root path
  if (process.env.NETLIFY_PROD === "true") {
    return "/";
  }

  // For GitHub Pages (staging/development)
  if (process.env.GITHUB_PAGES === "true") {
    return "/mng-front-landing/";
  }

  // For local development, default to root path
  return "/";
};

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [vue()],
  base: getBaseUrl(),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
