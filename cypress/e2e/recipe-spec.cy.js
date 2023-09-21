import { getRecipe } from '../../src/apiCalls';

describe('Recipe Page', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
      { fixture: 'drinks.json' },
    ).as('getDrinks');
    cy.intercept(
      'GET',
      ' https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=12862',
      { fixture: 'recipe.json' },
    ).as('getRecipe');
  });
  it('does somethign', () => {
    cy.visit('/12862');
    cy.wait('@getRecipe');
  });
});
