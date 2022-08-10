/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "<rootDir>/vitest.config.ts",
    coverage: {
      reporter: ["text", "html", "text-summary"],
      exclude: ["node_modules/"],
      include: ["tests"]
    },
  },
})
