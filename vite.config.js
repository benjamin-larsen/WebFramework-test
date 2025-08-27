import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import plugin from './webframework-plugin/index.js'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [Inspect(), plugin()],
base: "./",
resolve: {
    alias: {
      'webframework': path.resolve(__dirname, 'webframework')
    }
  }
})
