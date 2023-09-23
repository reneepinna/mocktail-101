import './FavoritePage.scss';
import DrinkCard from '../DrinkCard/DrinkCard';

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
