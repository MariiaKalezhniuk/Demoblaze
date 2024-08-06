/// <reference types='cypress' />

describe('Add product to the cart', () => {
  before(() => {
    cy.visit('/');
    
    it('Should add Samsung s6', () => {
      cy.get('.card-title').contains('Samsung galaxy s6').click();
      cy.get('.btn.btn-success.btn-lg').click();
      cy.on('window:alert', (alertText) => {
        expect(alertText).to.equal('Product added')
      })
    })
  });
});