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
  it('should show a drink with an image, a name, ingredients and instructions', () => {
    cy.visit('/12862');
    cy.wait('@getRecipe');
    cy.get('.recipe__img').should(
      'have.attr',
      'src',
      'https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg',
    );
    cy.get('.recipe__name').should('contain', 'Aloha Fruit punch');
    cy.get('.recipe__ingredient').should('have.length', 7);
    cy.get('.recipe__ingredient').first().should('contain', 'Water');
    cy.get('.recipe__ingredient').last().should('contain', 'Pineapple juice');
    cy.get('.recipe__instructions').should(
      'contain',
      'Add 1/4 cup water to ginger root. Boil 3 minutes. Strain. Add the liquid to the guava, lemon and pineapple juices. Make a syrup of sugar and remaining water. Cool. Combine with juices and pineapple. Chill throroughly.',
    );
    cy.get('.back-btn').should('be.visible');
  });

  it('should be able to go to a recipe, favorite and go back to the homepage', () => {
    cy.visit('/');
    cy.wait('@getDrinks')
    cy.location('pathname').should('eq', '/')
    cy.get('#12862').click()
    cy.wait('@getRecipe')
    cy.location('pathname').should('eq', '/12862')
    cy.get('.favorite-i').click()
    cy.get('.link').last().click();
    cy.location('pathname').should('eq', '/favorites');
    cy.get('.drinkGrid')
      .should('have.length', 1)
      .should('contain', 'Aloha Fruit punch');
    cy.get('#12862').click()
    cy.wait('@getRecipe')
    cy.location('pathname').should('eq', '/12862')
    cy.get('.back-btn').click()
    cy.location('pathname').should('eq', '/')
  })
});
