import { useParams } from 'react-router-dom'
import './RecipePage.scss'
import { useEffect, useState } from 'react'
import { getRecipe } from '../../apiCalls'

function RecipePage() {
  const id = useParams().id
  const [recipe, setRecipe] = useState({})
  const [error, setError] = useState('')
  
  async function initializeRecipe() {
    const data = await getRecipe(id)

    if (data.name === 'Error') {
      setError(data)
      return
    } 
    
    setError('')
    setRecipe(data)
  }

  useEffect(() => {
    initializeRecipe()
  }, [])

  return <div>RecipePage</div>
}

export default RecipePage