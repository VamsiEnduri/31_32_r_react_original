import React ,{useEffect,useState}from 'react'
import Navbarr from './Components/Navbarr/Navbarr'
import {Routes, Route} from "react-router-dom"
import Favs from "./Components/Favs/Favs";
import Cart from "./Components/Cart/Cart";
import Recipes from './Components/Recipes/Recipes'
import NotFound from './Components/NotFound';
import Home from './Components/Home/Home';
import axios from 'axios';
import RecipeDetails from './Components/Recipes/RecipeDetails';
const App = () => {
    const [recipes,setRecipes]=useState([])
    useEffect(()=>{
         axios.get("https://dummyjson.com/recipes").then(res=>{
          console.log(res.data.recipes)
          setRecipes(res.data.recipes)
         })
    },[])
  return (
    <div>
      <Navbarr />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/recipes' element={<Recipes recipesData={recipes}/>}/>
        <Route path='/recipes/:id' element={<RecipeDetails recipesDataToRecipeDetails={recipes}/>}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/favs' element={<Favs />}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )
}

export default App

// requirement  ( wireframes )
// requirements dependencies ( packages ) install
// folders , files, comps creation 
// flow of the task / project
// achieving step by step