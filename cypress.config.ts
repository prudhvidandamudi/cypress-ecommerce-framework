import { defineConfig } from 'cypress';
import fs from 'fs';

export default defineConfig({
  e2e: {
    baseUrl: 'https://www.automationexercise.com',
    env: {
      apiEndpoints: {
        createUser: '/api/createAccount',
        deleteUser: '/api/deleteAccount',
      },
      uiUrls: {
        login: '/login',
        contactUs: '/contactus',
      },
    },
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true,
      timestamp: 'mmddyyyy_HHMMss',
    },
    screenshotOnRunFailure: true,
    video: true,
    videoCompression: 32,
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
      on(
        'after:spec',
        (spec: Cypress.Spec, results: CypressCommandLine.RunResult) => {
          if (results && results.video) {
            // Do we have failures for any retry attempts?
            const failures = results.tests.some((test) =>
              test.attempts.some((attempt) => attempt.state === 'failed')
            );
            if (!failures) {
              // delete the video if the spec passed and no tests retried
              fs.unlinkSync(results.video);
            }
          }
        }
      );
    },
  },
});
