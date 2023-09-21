describe('homepage', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
      { fixture: 'drinks.json' },
    ).as('getDrinks');
  });

  it('should show a header and drink cards', () => {
    cy.visit('/');
    cy.wait('@getDrinks');
    cy.get('.banner-img').should(
      'have.attr',
      'src',
      '/static/media/banner.95d057bd9ddd70d99cb9.jpeg',
    );
    cy.get('.heading').should('contain', 'Discover')
    cy.fixture('drinks.json')
      .its('drinks')
      .then(drinks => {
        drinks.forEach(drink => {
          cy.get(`#${drink.idDrink} h3`).should('contain', drink.strDrink);
          cy.get(`#${drink.idDrink} img`).should(
            'have.attr',
            'src',
            drink.strDrinkThumb,
          );
        });
      });
  });
});
