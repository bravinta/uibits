import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import packageJson from "./package.json";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true,
      include: "src/components/",
    }),
    react(),
  ],
  build: {
    minify: true,
    cssMinify: true,
    lib: {
      entry: path.join(__dirname, "src/components/index.ts"),
      name: "uibits",
      formats: ["es", "umd"],
      fileName: (format) => `uibits.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
