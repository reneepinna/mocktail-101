import { useState } from 'react';
import DrinkContainer from '../DrinkContainer/DrinkContainer';
import './HomePage.scss';
import { useEffect } from 'react';

function HomePage({ drinks, favorites, toggleFavorite}) {
  const [randomDrink, setRandomDrink] = useState({})
   
  function getRandomDrink () {
    const index = Math.floor(Math.random() * drinks.length);
    return drinks[index]
  }

  useEffect(() => {
    setRandomDrink(getRandomDrink())
  }, [drinks])

  return (
    <div className='homePage'>
      <article className='discover'>
      {/* {randomDrink && <img className='randomDrinkImg' src={randomDrink.strDrinkThumb} />} */}
      </article>
      <h1 className='heading'>Discover</h1>
      <DrinkContainer drinks={drinks} favorites={favorites} toggleFavorite={toggleFavorite} />
    </div>
  );
}

export default HomePage;
