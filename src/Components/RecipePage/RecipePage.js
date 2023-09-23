import { NavLink, useNavigate, useParams } from 'react-router-dom';
import './RecipePage.scss';
import { useEffect, useState } from 'react';
import { getRecipe } from '../../apiCalls';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

function RecipePage({ favorites, toggleFavorite, drinks }) {
  const id = useParams().id;
  const [recipe, setRecipe] = useState({ ingredients: [], measurements: [] });
  const navigate = useNavigate();

  async function initializeRecipe() {
    const regex = new RegExp('[0-9]{1,6}$');
    if (!regex.test(id)) {
      navigate('/error');
    }

    const data = await getRecipe(id);

    if (data.name === 'SyntaxError' || data.name === 'Error') {
      navigate('/error');
    }

    setRecipe(data);
  }

  useEffect(() => {
    initializeRecipe();
  }, []);

  const ingredients = recipe.ingredients.map((ingredient, index) => (
    <p className='recipe__ingredient'>{`${recipe.measurements[index]} ${ingredient}`}</p>
  ));

  return (
    <div className='page'>
      <img className='recipe__img' src={recipe.strDrinkThumb} />
      <main className='main'>
        <div className='recipe-heading'>
          <NavLink to='/' className='back-btn'>
            <FontAwesomeIcon icon={faArrowLeft} size='xl' />
          </NavLink>
          <FavoriteIcon
            drink={drinks.find(drink => drink.idDrink === id)}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </div>
        <h1 className='recipe__name'>{recipe.strDrink}</h1>
        <div className='recipe__ingredients'>{ingredients}</div>
        <p className='recipe__instructions'>{recipe.strInstructions}</p>
      </main>
    </div>
  );
}

export default RecipePage;

RecipePage.propTypes = {
  drinks: PropTypes.arrayOf(
    PropTypes.shape({
      idDrink: PropTypes.string,
      strDrink: PropTypes.string,
      strDrinkThumb: PropTypes.string,
    }),
  ),
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      idDrink: PropTypes.number,
      strDrink: PropTypes.string,
      strDrinkThumb: PropTypes.string,
    }),
  ).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};
