import React from 'react'
import "./Recipe.css"
import { Link } from 'react-router-dom'
const Recipe = (prop) => {
    const singleR=prop.singleRecipe
    console.log(singleR)
  return (
    <div className='recipeCard'>
        <img src={singleR.image} />
       <h1> {singleR.name}</h1>
       <Link to={`/recipes/recipe/${singleR.id}`}>ViewDeatils</Link>
    </div>
  )
}

export default Recipe