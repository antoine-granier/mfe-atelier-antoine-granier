import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {federation} from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "header",
      filename: "remoteEntry.js",
      exposes: {
        "./Header": "./src/components/Header.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 2000,
  },
  build: {
    target: "esnext",
    minify: false,
    modulePreload: false,
    rollupOptions: {
      output: {
        format: "esm"
      }
    }
  },
});
