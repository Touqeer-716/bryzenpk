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
    port: 5173,

    proxy: {
      "/api": {
        target: "http://localhost/bryzenpk",
        changeOrigin: true,
      },
      "/uploads": { target: "http://localhost/bryzenpk", changeOrigin: true },
    },
  },
});
