import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    port: 8080,
    strictPort: true,
    host: true,
    allowedHosts: ["localhost", "jalinan.org", "*.jalinan.org"],
  },
  build: {
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
