import './DrinkCard.scss';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';
import PropTypes from 'prop-types';

function DrinkCard({ drink, favorites, toggleFavorite }) {
  const { idDrink, strDrink, strDrinkThumb } = drink;
  const navigate = useNavigate();
  return (
    <article
      id={idDrink}
      className='card'
      onClick={e => {
        if (
          typeof e.target.className === 'string' &&
          e.target.className !== 'favorite-icon'
        ) {
          navigate(`/${idDrink}`);
        }
      }}
    >
      <img className='card__thumbnail' src={strDrinkThumb} />
      <div className='card__textBlock'>
        <h3 className='card__drinkName'>{strDrink}</h3>
        <div className='favorite-icon'>
          <FavoriteIcon
            drink={drink}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </div>
      </div>
    </article>
  );
}

export default DrinkCard;

DrinkCard.propTypes = {
  drink: PropTypes.shape({
    idDrink: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
  }).isRequired,
  favorites: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
};
