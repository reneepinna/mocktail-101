import { useEffect, useState } from 'react'
import { getDrinks } from '../../apiCalls'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'


function App() {
  const [drinks, setDrinks] = useState([])
  const [favorites, setFavorites] = useState([])

  async function initializeDrinks() {
    const data = await getDrinks()
    setDrinks(data)
  }

  function toggleFavorite(drink) {
    if (favorites.find(favorite => favorite.idDrink === drink.idDrink)) {
      setFavorites(prev => prev.filter(favorite => favorite.idDrink !== drink.idDrink))
    } else {
      setFavorites(prev => [...prev, drink])
    }
  }

  useEffect(() => {
    initializeDrinks()
  }, [])

  return <Routes>
    <Route path='/' element={<HomePage drinks={drinks} favorites={favorites} toggleFavorite={toggleFavorite}/>}/>
  </Routes>
}

export default App
