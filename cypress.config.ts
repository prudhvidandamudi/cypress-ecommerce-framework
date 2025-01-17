import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    blockHosts: [
      '*.doubleclick.net',
      '*.google-analytics.com',
      '*.googlesyndication.com',
      'googleads.g.doubleclick.net',
      'ad.doubleclick.net',
      '*.analytics.google.com',
      'www.google-analytics.com',
      'stats.g.doubleclick.net',
      'googletagmanager.com',
      'www.googletagmanager.com',
      '*.hotjar.com',
      'bidbrain.app',
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
