
import Recipe from './Recipe'
import "./Recipes.css"
const Recipes = ({recipesData}) => {
  // const [recipes,setRecipes]=useState([])
  // useEffect(()=>{
  //      axios.get("https://dummyjson.com/recipes").then(res=>{
  //       console.log(res.data.recipes)
  //       setRecipes(res.data.recipes)
  //      })
  // },[])
  return (
    <div className='recipesContainer'>
    <h1 style={{textAlign:"center",marginTop:"2rem"}}> 
       Recipes</h1>
   
  <div id='allRecipesHolder'>
     {recipesData.map((recipe)=>{
    return (
      <>
               <Recipe singleRecipe={recipe}/>
      </>
    )
   })}
  </div>
          

    </div>
  )
}

export default Recipes

//axios  (put,post,get,delete)