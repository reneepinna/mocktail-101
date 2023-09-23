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
    const cleanedData = cleanData(data.drinks);
    return formatData(cleanedData)
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

function formatData(data) {
  const keys = Object.keys(data);

  return keys.reduce((recipe, key) => {
    if (key.includes('strIngredient')) {
      recipe.ingredients.push(data[key])
    }

    if (key.includes('strMeasure')) {
      recipe.measurements.push(data[key])
    }

    return recipe
  }, {
    measurements: [],
    ingredients: [],
    idDrink: data.idDrink,
    strDrink: data.strDrink,
    strDrinkThumb: data.strDrinkThumb,
    strGlass: data.strGlass,
    strInstructions: data.strInstructions
  });

}

export { getDrinks, getRecipe };
