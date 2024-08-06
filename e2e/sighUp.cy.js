/// <reference types='cypress' />

const { RandomModule } = require("@faker-js/faker");

describe('Demoblaze Sign up form', () => {
  let user;
  before(() => {
    cy.visit('/');
    cy.task('generateUser').then(generateUser => {
      user = generateUser;
    });
  });
  it('Should register a new account', () => {
    cy.get('#signin2').click();
    cy.get('#sign-username').type(user.firstName);
    cy.get('#sign-password').type('Qwerty123!');
    cy.get('.btn.btn-primary').click();
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Sign up successful.')
    })
  });
});