import DrinkCard from '../DrinkCard/DrinkCard'
import './DrinkContainer.scss'

function DrinkContainer({drinks, favorites, toggleFavorite}) {
  const cards = drinks.map(drink => <DrinkCard drink={drink} key={drink.idDrink} favorites={favorites} toggleFavorite={toggleFavorite}/>)

  return <div className='drinkGrid'>
    {cards}
  </div>
}

export default DrinkContainer