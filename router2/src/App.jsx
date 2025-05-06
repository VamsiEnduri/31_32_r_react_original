// import React from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import Home from './Components/Home/Home'
// import About from './Components/About/About'
// import Contact from './Components/Contact/Contact'
// import {Routes, Route} from "react-router-dom"
// import Products from './Components/Products/Products'
// import data from './Components/Products/pData'
// import ProductDetails from './Components/ProductDetails/ProductDetails'
// import Recipes from './Components/Recipes/Recipes'
// import RecipeDetails from './Components/RecipeDetails/RecipeDetails'

// const App = () => {
//   return (
//     <div className='App'>
//       <Navbar />
//       hello
//      <Routes>
//       <Route path='/home' element={<Home />}/>
//       <Route path='/about' element={<About />}/>
//       <Route path='/contact' element={<Contact />}/>
//       <Route path='/recipes' element={<Recipes />}/>
//       <Route path='/recipes/recipe/:id' element={<RecipeDetails />}/>
//       <Route path='/products/product/:id' element={<ProductDetails />}/>
//       <Route path='/products' element={<Products productsData={data.products} />}/>
//      </Routes>
//     </div>
//   )
// }

// export default App





import React from 'react'
console.log(React,"react")

const App = () => {
  return (
    <div>  
      hello there 
      <h1>this is h1</h1>
      <p>ths is p tag</p>





      <img src="https://m.media-amazon.com/images/I/718gVU8ktKL._AC_UF1000,1000_QL80_.jpg"/>

      </div>
  )
}

console.log(App)
console.log(App())

export default App

// const divTAG=React.createElement("div",{className:"parentDiv"},"hello there")
// console.log(divTAG,"createelem divTag")

// jsx is not but a html like strtucre and it is an object