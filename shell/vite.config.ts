import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {federation} from "@module-federation/vite";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "app_shell",
      remotes: {
        header: "http://localhost:2000/remoteEntry.js",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: "esnext",
    minify: false,
    rollupOptions: {
      output: {
        format: "esm"
      }
    }
  },
});
