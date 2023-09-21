import { useParams } from 'react-router-dom';
import './RecipePage.scss';
import { useEffect, useState } from 'react';
import { getRecipe } from '../../apiCalls';

function RecipePage() {
  const id = useParams().id;
  const [recipe, setRecipe] = useState({ ingredients: [], measurements: []});
  const [error, setError] = useState('');

  async function initializeRecipe() {
    const data = await getRecipe(id);

    if (data.hasOwnProperty('name')) {
      setError(data);
      return;
    }

    setError('');
    setRecipe(data);
  }

  useEffect(() => {
    initializeRecipe();
  }, []);

  const ingredients = recipe.ingredients.map((ingredient, index) => (
    <p>{`${recipe.measurements[index]} ${ingredient}`}</p>
  ));

  return (
    <main>
      <img src={recipe.strDrinkThumb} />
      <h1>{recipe.strDrink}</h1>
      {ingredients}
      <p>{recipe.strInstructions}</p>
    </main>
  );
}

export default RecipePage;
