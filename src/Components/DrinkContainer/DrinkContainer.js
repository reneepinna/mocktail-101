import DrinkCard from '../DrinkCard/DrinkCard';
import './DrinkContainer.scss';
import PropTypes from 'prop-types';

function DrinkContainer({ drinks, favorites, toggleFavorite, error }) {
  const cards = drinks.map(drink => (
    <DrinkCard
      key={drink.idDrink}
      drink={drink}
      favorites={favorites}
      toggleFavorite={toggleFavorite}
    />
  ));
  return (
    <div className='drinkGrid'>
      {error && <p className='error-msg'>{error}</p>}
      {cards}
    </div>
  );
}

export default DrinkContainer;

DrinkContainer.propTypes = {
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
  error: PropTypes.string,
};
