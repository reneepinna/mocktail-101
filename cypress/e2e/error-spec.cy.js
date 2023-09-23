describe('Homepage network errors', () => {
  it('should throw a network error', () => {
    cy.intercept(
      'GET',
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
      { forceNetworkError: true },
    ).as('error');
    cy.visit('/');
    cy.wait('@error');

    cy.get('.error-msg')
      .should('be.visible')
      .should('contain', 'Error: Oops! Something went wrong');
    cy.get('.card').should('not.exist');
  });

  it('should throw a 500 level error', () => {
    cy.intercept(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
      { statusCode: 500 },
    ).as('error');
    cy.visit('/');
    cy.wait('@error')
      .its('response')
      .should('deep.include', { statusCode: 500 });

    cy.get('.error-msg')
      .should('be.visible')
      .should('contain', 'Error: Oops! Something went wrong');
    cy.get('.card').should('not.exist');
  });
});

describe('Recipe page network errors', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
      { fixture: 'drinks.json' },
    );
  });
  it('should throw a network error', () => {
    cy.intercept(
      'GET',
      'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12862',
      { forceNetworkError: true },
    ).as('error');
    cy.visit('/12862')
    cy.wait('@error')
    cy.get('.error-message').should('exist').should('contain', 'Oops! We could')
    cy.location('pathname').should('eq', '/error')
    })
  it('should should throw a 500 level error', () => {
    cy.intercept(
      'GET',
      'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12862',
      { statusCode: 500 },
    ).as('error');
    cy.visit('/12862')
    cy.wait('@error')
    cy.get('.error-message').should('exist').should('contain', 'Oops! We could')
    cy.location('pathname').should('eq', '/error')
  });
  it('should throw a 404 level error', () => {
    cy.intercept(
      'GET',
      'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=66666',
      { statusCode: 404 },
    ).as('error');
    cy.visit('/66666')
    cy.wait('@error')
    cy.get('.error-message').should('exist').should('contain', 'Oops! We could')
    cy.location('pathname').should('eq', '/error')
  });
  it('should direct an id with the wrong syntax to the error page without an api call', () => {
    cy.visit('/555783ksdjfhisd')
    cy.get('.error-message').should('exist').should('contain', 'Oops! We could')
    cy.location('pathname').should('eq', '/error')
  })
});
