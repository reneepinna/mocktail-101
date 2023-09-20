import DrinkCard from '../DrinkCard/DrinkCard'
import './DrinkContainer.scss'

function DrinkContainer({drinks, favorites}) {
  const cards = drinks.map(drink => <DrinkCard drink={drink} key={drink.idDrink}/>)

  return <div className='drinkGrid'>
    {cards}
  </div>
}

export default DrinkContainer