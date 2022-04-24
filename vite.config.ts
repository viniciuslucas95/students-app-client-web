import { defineConfig } from 'vite'
const svgr = require('vite-plugin-svgr')
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()]
})
