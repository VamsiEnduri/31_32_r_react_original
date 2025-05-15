// import React, { useState,useEffect } from 'react'

// export const App = () => {

//   const [count,setCount]=useState(0)
//  const handleCount=()=>{
//    setCount(prev=>prev+10)
//   }

//    useEffect(()=>{
//     fetch("https://fakestoreapi.com/products").then(res=>res.json()).then(res=>console.log(res))
//   })

//   useEffect(()=>{
//         alert("hello this is mount phase")
//   })

//    useEffect(()=>{
//         alert("hello this is mount phase 2")
//   })

//   console.log(count)
//   return (
//     <div>
//       {count}
//       <button onClick={handleCount}>+</button>
//     </div>
//   )
// }

// import React, { useState, useEffect } from "react";

// export const App = () => {
// const [apiData,setApiData]=useState([])

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((res) =>{
//          console.log(res)
//          setApiData(res) // updating state here :-- comp re-render
//       });
//   },[]);

//   // mounting always runs once after initail render of comp
//   return (
//     <div>
//      hello there im fakestore api data

//      {apiData.map((x)=>{
//       return (
//         <>
//         <h1>{x.title}</h1>
//         </>
//       )
//      })}
//     </div>
//   );
// };





// import React, { useState, useEffect } from "react";

// export const App = () => {
// const [apiData,setApiData]=useState([])
// const [filtCatData,setFilCatData]=useState([]) // entire data // ele data

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((res) => res.json())
//       .then((res) =>{
//          console.log(res)
//          setApiData(res) // updating state here :-- comp re-render
//          setFilCatData(res)
//       });
//   },[]);

//   const handleFilData=(abc)=>{
//          const filData=apiData.filter(x=>x.category === abc)
//          console.log(filData)
//          setFilCatData(filData)
//   }

//   // mounting always runs once after initail render of comp
//   return (
//     <div>
//      hello there im fakestore api data 
//      {/* <button onClick={}>All</button> */}
//      <button onClick={()=>handleFilData("electronics")}>Elec</button>
//      <button onClick={()=>handleFilData("jewelery")}>jew</button>
//      <button onClick={()=>handleFilData("men's clothing")}>mens</button>
//      <button onClick={()=>handleFilData("women's clothing")}>womens</button>

//      {filtCatData.map((x)=>{
//       return (
//         <>
//         <h1>{x.title}</h1>
//         </>
//       )
//      })}
//     </div>
//   );
// };






import React, { useState, useEffect } from "react";

export const App = () => {
const [apiData,setApiData]=useState([]) 

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) =>{
         console.log(res)
         setApiData(res) // updating state here :-- comp re-render
      });
  },[]);

  const handleFilData=(abc)=>{
         const filData=apiData.filter(x=>x.category === abc)  // 6 elect electronics === "jewelery"
         console.log(filData)
         setApiData(filData)
  }

  // mounting always runs once after initail render of comp
  return (
    <div>
     hello there im fakestore api data 
     {/* <button onClick={}>All</button> */}
     <button onClick={()=>handleFilData("electronics")}>Elec</button>
     <button onClick={()=>handleFilData("jewelery")}>jew</button>
     <button onClick={()=>handleFilData("men's clothing")}>mens</button>
     <button onClick={()=>handleFilData("women's clothing")}>womens</button>

     {apiData.map((x)=>{
      return (
        <>
        <h1>{x.title}</h1>
        </>
      )
     })}
    </div>
  );
};