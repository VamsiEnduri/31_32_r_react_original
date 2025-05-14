// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const handleIncre = () => {
//     setCount(count + 10);
//   };
//   const handleDecre = () => {
//     setCount(count - 10);
//   };
//   const handleReset = () => {
//     setCount( 0);
//   };
//   return (
//     <div>
//       <h1>Counter App with useState hook</h1>
//       <h2>{count}</h2>
//       <button onClick={handleIncre}>+</button>
//       <button onClick={handleDecre}>-</button>
//       <button onClick={handleReset}>reset</button>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const handleCount = (xyz) => {
//     if (xyz === 0) {
//       setCount(0);
//     } else {
//       setCount(count + xyz);
//     }
//   };
//   return (
//     <div>
//       <h1>Counter App with useState hook</h1>
//       <h2>{count}</h2>
//       <button onClick={() => handleCount(10)} disabled={count === 100}>
//         +
//       </button>
//       <button onClick={() => handleCount(-10)} disabled={count === 0}>
//         -
//       </button>
//       <button onClick={() => handleCount(0)}>reset</button>
//     </div>
//   );
// };

// export default App;



// import React, { useState } from 'react'

// const App = () => {
//   const [color,setColor]=useState("")
//   function handleColor(clr){
//     setColor(clr) 
//   }
//   return (
//     <div style={{backgroundColor:color}}>
//       <button onClick={()=>handleColor("red")}>red</button>
//       <button onClick={()=>handleColor("green")}>green</button>
//       <button onClick={()=>handleColor("yellow")}>yellow</button>
//     </div>
//   )
// }

// export default App


// import React, { useState } from 'react'

// const App = () => {
//   const [randomClr,setRandomClr]=useState("")
//   const handleRandomClrGenerate=()=>{
//     let chars="abcdef0123456789";
//     let color="#"

//     for(let i=0;i<6;i++){
//    const randomIndex=  Math.floor( Math.random()* chars.length);
//    color+=chars[randomIndex]
//     }

//     setRandomClr(color)

//   }
//   return (
//     <div style={{display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:randomClr,height:"90vh"}}>
//       <button onClick={handleRandomClrGenerate}>RandomClr</button>
//     </div>
//   )
// }

// export default App



// theme toggler

// import React, { useState } from 'react'
// import { IoSunnyOutline } from "react-icons/io5";
// import { FaMoon } from "react-icons/fa";
// const App = () => {
//   const [theme,setTheme]=useState(false) //true
//   const handleTheme=()=>{
//     setTheme(previous=>!previous)
//   }
//   console.log(theme)
//   return (
//     <div style={{backgroundColor:theme ? "black" :"white"}}>
//       <button onClick={handleTheme}>{theme ? <IoSunnyOutline /> : <FaMoon /> }</button>
//     </div>
//   )
// }


// export default App


// import React, { useState } from 'react'
// import data from './data'
// const App = () => {
//   const [fakeStoreData,setFakeStoreData]=useState([])
//   const handleData=(cat)=>{
//             const filteData=data.filter(x=>x.category === cat)
//             console.log(filteData)
//             setFakeStoreData(filteData)
//   }
//   return (
//     <div>
//       <button onClick={()=>handleData("electronics")}>electronics</button>
//       <button onClick={()=>handleData("jewelery")}>jewellery</button>


//       {fakeStoreData.length > 0 ? <>
//       {fakeStoreData.map((x)=>{
//         return (
//           <>
//           <h1>{x.title}</h1>
//           </>
//         )
//       })}
//       </> :"no data found"}
//     </div>
//   )
// }

// export default App




import React, { useState, useEffect } from "react";
import data from "./data";
const App = () => {
  const [filData, setFilData] = useState([]);


  const handleCategoryData = (cat) => {
    const filteredData = data.filter((x) => x.category === cat);
    console.log(filteredData);
    setFilData(filteredData);
    localStorage.setItem("p", JSON.stringify(filteredData));
  };
  useEffect(() => {
    const dataFRomLS = JSON.parse(localStorage.getItem("p"));
    setFilData(dataFRomLS);
  }, []);
  return (
    <div>
      <button onClick={() => handleCategoryData("electronics")}>
        electronics
      </button>
      <button onClick={() => handleCategoryData("jewelery")}>jewelery</button>


      {filData.length <= 0 ? (
        "no data"
      ) : (
        <>
          {filData.map((x) => {
            return <>{x.title}</>;
          })}
        </>
      )}
    </div>
  );
};


export default App;
