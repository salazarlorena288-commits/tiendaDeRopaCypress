const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.bershka.com/es/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
