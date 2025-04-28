import React from "react";

const ObjectsArray = () => {
  const products = [
    { id: 1, name: "mi", cost: 15000 },
    { id: 3, name: "samsung", cost: 25000 },
  ];
  return (
    <div>
      {products.map((p, index) => {
        console.log(p);
        return (
          <div key={index}>
            <h1>{p.name}</h1> <p>{p.cost}</p>
          </div>
        ); //fragments
      })}
    </div>
  );
};

export default ObjectsArray;
