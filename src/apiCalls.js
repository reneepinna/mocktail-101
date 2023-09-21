async function getDrinks() {
  const resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
  const data = await resp.json()
  return data.drinks
}

export {getDrinks}