import './FavoritePage.scss';
import DrinkCard from '../DrinkCard/DrinkCard';
import PropTypes from 'prop-types'

function FavoritePage({ favorites, toggleFavorite }) {
  const cards = favorites.map(drink => (
    <DrinkCard
      key={drink.idDrink}
      drink={drink}
      favorites={favorites}
      toggleFavorite={toggleFavorite}
    />
  ));

  return (
    <div className='favorites-page'>
      {!cards.length && <p className='no-favorites'>You don't have any favorites yet.</p>}
      <div className='drinkGrid'>{cards}</div>
    </div>
  );
}

export default FavoritePage;

FavoritePage.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.shape({
    idDrink: PropTypes.string,
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string
  })).isRequired,
  toggleFavorites: PropTypes.func.isRequired 
}