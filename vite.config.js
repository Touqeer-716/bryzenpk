import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite"; // 👈 Import the new v4 plugin
//import { defineConfig } from "vite";
// import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
  ],
  server: {
    proxy: {
      // Intercept any local fetch request starting with '/api'
      "/ci4": {
        target: "http://127.0.0.1", // Forward it to your local CodeIgniter server
        changeOrigin: true, // Makes CodeIgniter think the request came from its own port
        secure: false, // Disables SSL checks for local testing
      },
    },
  },
});
