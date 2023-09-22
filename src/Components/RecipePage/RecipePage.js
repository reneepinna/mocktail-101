import { NavLink, useParams } from 'react-router-dom';
import './RecipePage.scss';
import { useEffect, useState } from 'react';
import { getRecipe } from '../../apiCalls';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function RecipePage({ favorites, toggleFavorite }) {
  const id = useParams().id;
  const [recipe, setRecipe] = useState({ ingredients: [], measurements: [] });
  const [error, setError] = useState('');

  async function initializeRecipe() {
    const data = await getRecipe(id);
    if (data.name === 'Error') {
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
    <>
      {error ? (
        <p className='error'>{error.message}</p>
      ) : (
        <div className='page'>
            <img className='recipe__img' src={recipe.strDrinkThumb} />
          <main className='main'>
            <div className='recipe-heading'>
            <NavLink to='/' className='back-btn'>
              <FontAwesomeIcon icon={faArrowLeft} size='xl' />
            </NavLink>
              <FavoriteIcon
                drinkId={id}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
                />
                </div>
              <h1 className='recipe__name'>{recipe.strDrink}</h1>
            <div className='recipe__ingredients'>{ingredients}</div>
            <p className='recipe__instructions'>{recipe.strInstructions}</p>
          </main>
        </div>
      )}
    </>
  );
}

export default RecipePage;
