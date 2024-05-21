/* eslint-disable no-undef */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [
      ".mjs",
      ".js",
      ".ts",
      ".jsx",
      ".tsx",
      ".json",
      ".vue",
      ".scss",
    ],
  },
  server: {
    port: process.env.PORT || 3000,
  },
  preview: {
    port: process.env.PORT || 3000,
    strictPort: true,
    host: true,
  },
});

// open: true,
// proxy: {
//   "/api": {
//     target: "http://localhost:3001",
//     changeOrigin: true,
//     rewrite: (path) => path.replace(/^\/api/, ""),
//   },
// },
