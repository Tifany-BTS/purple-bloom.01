import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import fs from "fs";

const rootHtml = fs.readdirSync(__dirname).filter((file) => file.endsWith(".html"));
const input: Record<string, string> = Object.fromEntries(
  rootHtml.map((file) => [file.replace(".html", ""), resolve(__dirname, file)])
);
input["catalogo-dir"] = resolve(__dirname, "catalogo/index.html");

export default defineConfig({
  plugins: [react()],
  publicDir: "public",
  build: {
    rollupOptions: {
      input,
    },
  },
});
