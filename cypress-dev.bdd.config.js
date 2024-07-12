const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsBuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

//const { fs } = require("fs");
//const path = require("path");

module.exports = defineConfig({
  viewportWidth: 1280,
  viewportHeight: 1024,
  pageLoadTimeout: 300000,
  defaultCommandTimeout: 30000,
  requestTimeout: 60000,
  responseTimeout: 60000,
  experimentalSourceRewriting: false,
  reporter: "mochawesome",

  reporterOptions: {
    reportDir: "cypress/reports/mochawesome-report",
    overwrite: true,
    html: false,
    json: true,
    timestamp: "mmddyyyy_HHMMss",
  },

  e2e: { // BDD
    baseUrl: "https://example.cypress.io",
    env: {
        variable1: "1"
    },
    setupNodeEvents(on, config) {
        const bundler = createBundler({
            plugins: [createEsBuildPlugin(config)],
        });
        on('file:preprocessor', bundler);
        addCucumberPreprocessorPlugin(on, config);
        return config;
    },
    specPattern: 'cypress/features/*.feature'
  },

  // chromeWebSecurity: false,

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});

