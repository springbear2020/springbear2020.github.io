import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import * as path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  root: "./",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    proxy: {
      "/gateway-api": {
        changeOrigin: true,
        target: "http://localhost:8888",
        rewrite: (path) => path.replace("/gateway-api", ""),
      },
    },
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
      },
    },
  },
});
