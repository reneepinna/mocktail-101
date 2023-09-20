import './DrinkCard.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';

function DrinkCard({ drink, favorites, toggleFavorite }) {
  const { idDrink, strDrink, strDrinkThumb } = drink;
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleIsFavorite() {
    setIsFavorite(prev => !prev);
  }

  useEffect(() => {
    if (favorites.find(favorite => drink.idDrink === favorite.idDrink)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, []);

  const icon = isFavorite ? faHeart : farHeart;

  return (
    <article id={idDrink} className='card'>
      <img className='card__thumbnail' src={strDrinkThumb} />
      <div className='card__textBlock'>
        <h3 className='card__drinkName'>{strDrink}</h3>
        <FontAwesomeIcon
          icon={icon}
          onClick={() => {
            toggleFavorite(drink);
            toggleIsFavorite();
          }}
        />
      </div>
    </article>
  );
}

export default DrinkCard;
