import './DrinkCard.scss';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '../FavoriteIcon/FavoriteIcon';

function DrinkCard({ drink, favorites, toggleFavorite }) {
  const { idDrink, strDrink, strDrinkThumb } = drink;
  const navigate = useNavigate();

  return (
    <article
      id={idDrink}
      className='card'
      onClick={e => {
        if (typeof e.target.className === 'string') {
          navigate(`/${idDrink}`);
        }
      }}
    >
      <img className='card__thumbnail' src={strDrinkThumb} />
      <div className='card__textBlock'>
        <h3 className='card__drinkName'>{strDrink}</h3>
        <FavoriteIcon
          drinkId={idDrink}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </article>
  );
}

export default DrinkCard;
