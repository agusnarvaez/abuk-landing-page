/// <reference types="vitest" />
/// <reference types="Vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
    },
  },
  test: {
    globals: true,
    setupFiles: ['src/setupTests.ts'],
    environment: 'jsdom',
    coverage:{
      reporter: ['text', 'json', 'html', 'json-summary']
    }
  },
  /* coverage:{
    provider: 'v8',
    reporter: ['text', 'json', 'html', 'json-summary']
  } */
})
