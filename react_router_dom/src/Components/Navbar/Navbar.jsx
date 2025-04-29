import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div id='nav'>
        <div id="nav_left">
            VamsiTech
        </div>
        <div id="nav_right">
           <Link id='link' to="/home">
           <span>Home</span>
           </Link>
            <Link id='link' to="/about">
            <span>About</span>
            </Link>
           <Link id='link' to="/contact">
           <span>Contact</span>
           </Link>

          <Link id='link' to="/products">
          <span>Products</span>
          </Link>
        </div>
    </div>
  )
}

export default Navbar