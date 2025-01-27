// vite.config.js или vite.config.ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Включить поддержку глобальных функций, таких как describe, it
    environment: 'jsdom', // Эмуляция DOM для тестирования React компонентов
    setupFiles: './src/test/setup.ts', // Файл с настройками (создадим его далее)
  },
  server: {
    host: true, // Позволяет слушать все сетевые интерфейсы
    port: 5173, // Можно указать нужный порт, по умолчанию 5173
    // Если необходимо, можно добавить другие параметры, например:
    // https: false,
    // open: true, // Автоматически открывать браузер
  },
})
