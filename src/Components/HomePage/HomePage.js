import { useState } from 'react';
import DrinkContainer from '../DrinkContainer/DrinkContainer';
import './HomePage.scss';
import { useEffect } from 'react';
import banner from './banner.jpeg';

function HomePage({ drinks, favorites, toggleFavorite }) {
  const [randomDrink, setRandomDrink] = useState({});

  function getRandomDrink() {
    const index = Math.floor(Math.random() * drinks.length);
    return drinks[index];
  }

  useEffect(() => {
    setRandomDrink(getRandomDrink());
  }, [drinks]);

  return (
    <div className='homePage'>
      <article className='discover'>
        <img className='banner-img' src={banner} />
        {/* {randomDrink && <img className='randomDrinkImg' src={randomDrink.strDrinkThumb} />} */}
      </article>
      <h1 className='heading'>Discover</h1>
      <main>
        <DrinkContainer
          drinks={drinks}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      </main>
    </div>
  );
}

export default HomePage;
