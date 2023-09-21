async function getDrinks() {
  try {
    const resp = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
    );

    if (resp.status === 404) {
      throw new Error('Page not found')
    } else if (!resp.ok) {
      throw new Error('Oops! Something went wrong')
    }

    const data = await resp.json();
    return data.drinks;

  } catch (error) {
    return error
    }
}

export { getDrinks };
