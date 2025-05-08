// import React from "react";
// import { Navbar } from "./Comps/Navbar/Navbar";
// import Products from "./Comps/Products/Products";
// // import NYR from "./Home";
// // import {Home1 as H,Home2 as H2, Home3 as H3} from "./Home"

// // import {BrowserRouter,Routes,Route} from "react-router-dom"



// // import NTRNEEL31 from "./Home"  //alias names
// // import { Navbar } from "./Comps/Navbar/Navbar";
// class App extends React.Component{
//     render(){
//       return (
//         <>
//         <div>hello this is class based comp</div>
        
//         <Navbar />
//         <Products />
       
//         </>
//       )
//     }
// }
// export default App;














import React from "react";
import { Navbar } from "./Comps/Navbar/Navbar";
import Products from "./Comps/Products/Products";

class App extends React.Component{
    render(){
      return (
        <>
        <div>hello this is class based comp</div>
        <Navbar />
        <Products />
        </>
      )
    }
}
export default App;