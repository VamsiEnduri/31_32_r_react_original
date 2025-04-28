import React from "react";
import dummyData from "./dummydata";
const Dummy = () => {
  return (
    <div>
      {dummyData.recipes.map((recipe, index) => {
        return (
          <div key={index}>
            <img src={recipe.image} width={200} />
            <p>{recipe.cuisine}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Dummy;
