const { defineConfig } = require("cypress");
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    viewportHeight: 1280,
    viewportWidth: 1800,
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          randomIndex = Math.floor(Math.random() * 2);
          return {
            firstName: faker.name.firstName(),
          };
        },
      });
    },
  },
});