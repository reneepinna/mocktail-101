import { NavLink, useParams } from 'react-router-dom';
import './RecipePage.scss';
import { useEffect, useState } from 'react';
import { getRecipe } from '../../apiCalls';

function RecipePage() {
  const id = useParams().id;
  const [recipe, setRecipe] = useState({ ingredients: [], measurements: [] });
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
    <p className='recipe__ingredient'>{`${recipe.measurements[index]} ${ingredient}`}</p>
  ));

  return (
    <main>
      <NavLink to='/' className='back-btn'>Back</NavLink>
      <img className='recipe__img' src={recipe.strDrinkThumb} />
      <h1 className='recipe__name'>{recipe.strDrink}</h1>
      <div className='recipe__ingredients'>{ingredients}</div>
      <p className='recipe__instructions'>{recipe.strInstructions}</p>
    </main>
  );
}

export default RecipePage;
