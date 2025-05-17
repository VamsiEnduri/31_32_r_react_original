import React from 'react'
import {useParams} from "react-router-dom"
import { Button } from 'react-bootstrap'
const RecipeDetails = ({recipesDataToRecipeDetails}) => {
    console.log(recipesDataToRecipeDetails,"data")
    const idRecipe=useParams()
    // console.log(typeof id.id)

    const MatchedRecipe=recipesDataToRecipeDetails.find((recipe)=>recipe.id === Number(idRecipe.id))
    console.log(MatchedRecipe,"mrecipe")
    const handleCartItems=(cartItemChoosed)=>{
        let cartItems=JSON.parse(localStorage.getItem("cartItems")) || []
        console.log(typeof cartItems,"cartItems")
        cartItems.push(cartItemChoosed)
                localStorage.setItem("cartItems",JSON.stringify(cartItems))
    }
    const handleFavItems=(favItemChoosed)=>{
  const favItems=JSON.parse(localStorage.getItem("favItems")) || []
  favItems.push(favItemChoosed)
  localStorage.setItem("favItems",JSON.stringify(favItems))
    }
  return (
    <div id='singleRecipeDetails'>
       
       <div id='img'>
        <img src={MatchedRecipe?.image}/>
       </div>
       <div>
        <h1>{MatchedRecipe.name}</h1>
        <p>{MatchedRecipe.cuisine}</p>
        <div style={{display:"flex",gap:20}}>
            <Button variant="outline-primary" onClick={()=>{handleCartItems(MatchedRecipe)}}>AddToCart</Button>
            <Button variant="outline-success" onClick={()=>{handleFavItems(MatchedRecipe)}}>AddToFavs</Button>
        </div>
       </div>

    </div>
  )
}

export default RecipeDetails