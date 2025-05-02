import React from 'react'
import DashBoard from './DashBoard'
import Login from './Login'
import Products from './products/Products'
const App = () => {
  // let userEmailPrompt=prompt("enter your eamil")
  // let userPswdPrompt=prompt("enter your pswd")
  // const email="vamsi@gmail.com"
  // const pswd="vamsi123"
  return (
    <div>
      <Products />
      {/* {email === userEmailPrompt &&  pswd === userPswdPrompt?<DashBoard />:<Login />} */}
    </div>
  )
}

export default App