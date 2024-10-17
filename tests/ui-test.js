describe('My Form', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should error on input', () => {
    cy.get('#my-input').type('Hello, World!');
    cy.get('#my-button').click();
    cy.get('#my-error-block').should('be.visible');
  });
});