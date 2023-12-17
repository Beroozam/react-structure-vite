import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import tailwindcss from 'tailwindcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  css:{
    postcss:{
      plugins:[tailwindcss()]
    }
  },
  resolve: {
    alias: {
      "states": "/src/states",
      "components": "/src/components",
      "hooks": "/src/hooks",
      "pages": "/src/pages",
      "services": "/src/services",
      "languages": "/src/languages",
      "helpers": "/src/helpers",
      "assets": "/src/assets",
    },
  },
})
