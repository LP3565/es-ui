import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',
    clearMocks: true,
    alias: {
      '@es-ui': resolve(__dirname, 'packages'),
    },
  },
})
