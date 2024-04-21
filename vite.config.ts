import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        care: resolve(__dirname, 'care/index.html'),
      },
    },
  },
});
