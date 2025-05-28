import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    open: true,
    port: 3000,
    watch: {
      usePolling: true,
    }
  },
  css: {
    postcss: './postcss.config.js'
  }
}) 