import { useEffect, useState } from 'react'
import { getDrinks } from '../../apiCalls'
import './App.scss'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import RecipePage from '../RecipePage/RecipePage'


function App() {
  const [drinks, setDrinks] = useState([])
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')

  async function initializeDrinks() {
    const data = await getDrinks()
  
    if (data.name === 'Error') {
      setError(`${data.name}: ${data.message}`)
      return
    }

    setError('')
    setDrinks(data)
  }

  function toggleFavorite(drinkId) {
    if (favorites.find(favoriteId => favoriteId === drinkId)) {
      setFavorites(prev => prev.filter(favoriteId => favoriteId !== drinkId))
    } else {
      setFavorites(prev => [...prev, drinkId])
    }
  }

  useEffect(() => {
    initializeDrinks()
  }, [])

  return <Routes>
    <Route path='/' element={<HomePage drinks={drinks} favorites={favorites} toggleFavorite={toggleFavorite} error={error}/>}/>
    <Route path='/:id' element={<RecipePage  favorites={favorites} toggleFavorite={toggleFavorite}/>} />
    <Route path='*' />
  </Routes>
}

export default App
