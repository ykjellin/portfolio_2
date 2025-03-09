import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 1000,
    open: true,
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
});
