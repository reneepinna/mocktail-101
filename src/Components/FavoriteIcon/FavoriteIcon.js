import './FavoriteIcon.scss';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

function FavoriteIcon({ favorites, toggleFavorite, drinkId }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleIsFavorite() {
    setIsFavorite(prev => !prev);
  }

  useEffect(() => {
    if (favorites.find(favoriteId => drinkId === favoriteId)) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, []);

  const icon = isFavorite ? faHeart : farHeart;

  return (
    <FontAwesomeIcon
      size='xl'
      color='#08a045'
      icon={icon}
      onClick={() => {
        toggleFavorite(drinkId);
        toggleIsFavorite();
      }}
    />
  );
}

export default FavoriteIcon;
