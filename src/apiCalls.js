async function getDrinks() {
  const resp = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic')
  // error handling with try/catch block
  // implement a data cleaning function
  console.log(resp)
  return resp.json()
}

export {getDrinks}