import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Use relative paths so the build works under any GitHub Pages subpath
// (https://<user>.github.io/<repo>/) without rebuilding for a fixed base.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
