import React from 'react'
import recipes from '../Recipes/rData'
import {useParams} from "react-router-dom"
const RecipeDetails = () => {
    console.log(useParams())
    // const {id}=useParams()
    const routeId=useParams()
    
    console.log(routeId,"id")

    const matchedProduct=recipes.recipes.find(x=>x.id === Number(routeId.id) )
    console.log(matchedProduct)
    if(!matchedProduct){
        return <h1>no prodict fiund with that id</h1>
    }
  return (
    <div>
        <img src={matchedProduct.image}/>
           <h1>{matchedProduct.name}</h1>
           {/* <p>{matchedProduct.price}</p> */}
           <span>{matchedProduct.description}</span>
    </div>
  )
}

export default RecipeDetails