import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        index: 'index.html',
        good: 'src/html/GOOD.html',
        bad: 'src/html/BAD.html',
      },
    },
  },
})
