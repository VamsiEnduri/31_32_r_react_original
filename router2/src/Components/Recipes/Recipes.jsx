import React from "react";
import recipes from "./rData";
import Recipe from "../Recipe/Recipe";
import "./Recipes.css"
const Recipes = () => {
  return (
    <div className="recipesContainer">
      {recipes.recipes.map((recipe) => {
        return (
          <>
            <Recipe singleRecipe={recipe} />
          </>
        );
      })}
    </div>
  );
};

export default Recipes;
