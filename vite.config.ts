import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

const htmlFiles = fs.readdirSync(__dirname).filter((file) => file.endsWith(".html"));
const input = Object.fromEntries(
  htmlFiles.map((file) => [file.replace(".html", ""), resolve(__dirname, file)])
);

export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  build: {
    rollupOptions: {
      input,
    },
  },
});
