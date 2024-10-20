// vite.config.js или vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Позволяет слушать все сетевые интерфейсы
    port: 5173, // Можно указать нужный порт, по умолчанию 5173
    // Если необходимо, можно добавить другие параметры, например:
    // https: false,
    // open: true, // Автоматически открывать браузер
  },
})
