import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: "/src" },
      { find: "@components", replacement: "/src/components" },
      { find: "@pages", replacement: "/src/pages" },
      { find: "@hooks", replacement: "/src/hooks" },
      { find: "@assets", replacement: "/src/assets" },
      { find: "@libs", replacement: "/src/libs" },
      { find: "@apis", replacement: "/src/apis" },
      { find: "@styles", replacement: "/src/styles" },
    ],
  },
});
