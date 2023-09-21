import { useState } from 'react';
import DrinkContainer from '../DrinkContainer/DrinkContainer';
import './HomePage.scss';
import { useEffect } from 'react';
import banner from './banner.jpeg';

function HomePage({ drinks, favorites, toggleFavorite }) {
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
        />
      </main>
    </div>
  );
}

export default HomePage;
