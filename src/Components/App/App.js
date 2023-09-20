import { useEffect, useState } from 'react'
import { getDrinks } from '../../apiCalls'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'


function App() {
  const [drinks, setDrinks] = useState([])


  async function initializeDrinks() {
    const data = await getDrinks()
    setDrinks([data.drinks])
  }

  useEffect(() => {
    // initializeDrinks()
    setDrinks([
      {
      "strDrink": "Afterglow",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/vuquyv1468876052.jpg",
      "idDrink": "12560"
      },
      {
      "strDrink": "Alice Cocktail",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/qyqtpv1468876144.jpg",
      "idDrink": "12562"
      },
      {
      "strDrink": "Aloha Fruit punch",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/wsyvrt1468876267.jpg",
      "idDrink": "12862"
      },
      {
      "strDrink": "Apello",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uptxtv1468876415.jpg",
      "idDrink": "15106"
      },
      {
      "strDrink": "Apple Berry Smoothie",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/xwqvur1468876473.jpg",
      "idDrink": "12710"
      },
      {
      "strDrink": "Apple Karate",
      "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/syusvw1468876634.jpg",
      "idDrink": "12564"
      }])
  }, [])

  return <Routes>
    <Route path='/' element={<HomePage drinks={drinks} />}/>
  </Routes>
}

export default App
