import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rolldownOptions: {
      input: {
        index: 'index.html',
        good: 'GOOD.html',
        bad: 'BAD.html',
      },
    },
  },
})
