import './FavoriteIcon.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

function FavoriteIcon({ favorites, toggleFavorite, drink }) {
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
    <FontAwesomeIcon
      size='xl'
      color='#386641'
      icon={icon}
      onClick={() => {
        toggleFavorite(drink);
        toggleIsFavorite();
      }}
    />
  );
}

export default FavoriteIcon;
