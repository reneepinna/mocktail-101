import DrinkContainer from '../DrinkContainer/DrinkContainer';
import './HomePage.scss';
import banner from './banner.jpeg';
import PropTypes from 'prop-types';

function HomePage({ drinks, favorites, toggleFavorite, error }) {
  return (
    <div className='homePage'>
      <article className='discover'>
        <img className='banner-img' src={banner} />
      </article>
      <h1 className='heading'>Discover</h1>
      <main>
        <DrinkContainer
          drinks={drinks}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
          error={error}
        />
      </main>
    </div>
  );
}

export default HomePage;

HomePage.propTypes = {
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
