import { defineConfig } from 'cypress'

export default defineConfig({
  viewportHeight: 760,
  viewportWidth: 1080,
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:4200',
    excludeSpecPattern: '**/examples/*',
  },
})
