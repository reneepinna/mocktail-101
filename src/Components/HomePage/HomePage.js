import DrinkContainer from '../DrinkContainer/DrinkContainer'
import './HomePage.scss'

function HomePage({drinks, favorites}) {

  return <div>
    <DrinkContainer drinks={drinks} favorites={favorites}/>
  </div>
}

export default HomePage