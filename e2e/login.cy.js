/// <reference types='cypress' />

describe('Demoblaze Login form', () => {
  before(() => {
    cy.visit('/');
    
    it('Should login registered user', () => {
    cy.get('#login2').click();
    cy.get('#loginusername').type('Marishka29');
    cy.get('#loginpassword').type('Perevirka1.')
    cy.get('.btn.btn-primary').contains('Log in').click();
    cy.get('#nameofuser').should('contain', 'Welcome Marishka29');
    })
  });
});
