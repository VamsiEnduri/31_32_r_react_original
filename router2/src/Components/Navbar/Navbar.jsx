import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div id="nav">
      <div id="nav_left">VamsiTech</div>
      <div id="nav_right">
        <Link to="/home" id="link">
          <span>Home</span>
        </Link>
        <Link to="/about" id="link">
          <span>About</span>
        </Link>
        <Link to="/contact" id="link">
          <span>Contact</span>
        </Link>

        <Link to="/products" id="link">
          <span>Products</span>
        </Link>


        <Link to="/recipes" id="link">
          <span>Recipes</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
