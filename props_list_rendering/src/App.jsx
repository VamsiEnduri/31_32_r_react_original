// import React from "react";
// import Students from "./Students";
// import Temp from "./Temp";
// import Fruits from "./Fruits";
// import ChildProp from "./ChildProp";



// const App = () => {
//   // const s1 = {
//   //   name: "vamsi",
//   //   age: 26,
//   // };

//   const s1="vamsi"
//   const s2 = {
//     name: "ravi",
//     age: 26,
//   };
//   const dayDetails={
//     degrree:"45c",
//     day:"MONDAY"
//   }
//   const fruit={
//     name:"mango",
//     yeildSeason:"summer"
//   }
//   const age=45
//   return (
//     <div>
//  {/* <ChildProp>
//    {age}  
//  </ChildProp>

//       <Students    student1={s1}  student2={s2}/>
//       <Temp tempDetails={dayDetails}></Temp>
//       <Fruits fruitDetails={fruit}/> */}
//       {/* <Fruits fruitDetails={fruit}/> */}

//       {/* <h1>hello my name is {s1.name} and my age is {s1.age}</h1>
//       <h2>hello my name is {s2.name} and my age is {s2.age}</h2> */}
//     </div>
//   );
// };

// export default App;


import React from 'react'
import StrArray from './ListRendering/StrArray'
import NumArray from './ListRendering/NumArray'
import ObjectsArray from './ListRendering/ObjectsArray'
import FakeData from './ListRendering/fakeData'
import Dummy from './ListRendering/Dummy'
const App = () => {
  return (
    <div>
      <Dummy />
      {/* <FakeData /> */}
      {/* <StrArray />
      <NumArray />
      <ObjectsArray /> */}
    </div>
  )
}

export default App