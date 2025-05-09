import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/index.js",
      name: "vapi-browser-ready",
      fileName: (format) =>
        format === "umd" ? `vapi-browser-ready.js` : `vapi-browser-ready.${format}.js`,
    },
  },
});
