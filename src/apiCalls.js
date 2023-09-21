async function getDrinks() {
  try {
    const resp = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic',
    );
    if (resp.status === 404) {
      throw new Error('Page not found');
    } else if (!resp.ok) {
      throw new Error('Oops! Something went wrong');
    }

    const data = await resp.json();
    return data.drinks;
  } catch (error) {
    if (error.name === 'TypeError') {
      return new Error('Oops! Something went wrong');
    }
    return error;
  }
}

async function getRecipe(id) {
  try {
    const resp = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`,
    );

    if (resp.status === 404) {
      throw new Error('Page not found');
    } else if (!resp.ok) {
      throw new Error('Oops! Something went wrong');
    }

    const data = await resp.json();
    return cleanData(data.drinks);
    
  } catch (error) {
    if (error.name === 'TypeError') {
      return new Error('Oops! Something went wrong');
    }
    return error;
  }
}

function cleanData([data]) {
  const keys = Object.keys(data);
  return keys.reduce((recipe, key) => {
    if (data[key]) {
      recipe[key] = data[key];
    }
    return recipe;
  }, {});
}

export { getDrinks, getRecipe };
