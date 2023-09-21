describe('Network errors', () => {
  // it('prints an error to the user if there is an error', () => {
  //   cy.intercept(
  //     'GET',
  //     'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
  //     { forceNetworkError: true },
  //   ).as('error');
  //   cy.visit('/')
  //   cy.wait('@error')
  // });
 
  it('should throw an error', () => {
    cy.intercept('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic', {statusCode: 500}).as('error')
    cy.visit('/')
    cy.wait('@error').its('response').should('deep.include', {statusCode: 500})

    cy.get('.error-msg').should('be.visible').should('contain', 'Error: Oops! Something went wrong')
    cy.get('.card').should('not.exist')
  })

});
