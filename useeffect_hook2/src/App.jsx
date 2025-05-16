// import { useEffect, useState } from 'react';


// function App() {
//   const [data, setData] = useState([]);
//   const [category, setCategory] = useState("electronics");


//   useEffect(() => {
//     let url = "https://fakestoreapi.com/products";


//     if (category !== "all") {
//       url = `https://fakestoreapi.com/products/category/${category}`;
//     }


//     fetch(url)
//       .then(res => res.json())
//       .then(res => {
//         console.log(`Fetched for category: ${category}`, res);
//         setData(res);
//       });
//   }, []); // ✅ API call depends on category


//   return (
//     <>
//       <h1>Filtered Products by Category</h1>


//       <button onClick={() => setCategory("electronics")}>Electronics</button>
//       <button onClick={() => setCategory("jewelery")}>Jewelry</button>
//       <button onClick={() => setCategory("men's clothing")}>Men's</button>
//       <button onClick={() => setCategory("women's clothing")}>Women's</button>


//       <ul>
//         {data.map(item => (
//           <li key={item.id} style={{ border: "1px solid gray", margin: "4px" }}>
//             {item.title}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }


// export default App;







// // import { useEffect, useState } from 'react';


// // function App() {
// //   const [category, setCategory] = useState("all");
// //   const [data, setData] = useState([]);


// //   const categories = [
// //     { name: "All", value: "all" },
// //     { name: "Electronics", value: "electronics" },
// //     { name: "Jewelry", value: "jewelery" },
// //     { name: "Men's", value: "men's clothing" },
// //     { name: "Women's", value: "women's clothing" },
// //   ];


// //   useEffect(() => {
// //     let url = "https://fakestoreapi.com/products";
// //     if (category !== "all") {
// //       url = `https://fakestoreapi.com/products/category/${category}`;
// //     }


// //     fetch(url)
// //       .then(res => res.json())
// //       .then(json => setData(json));

// // //  document.body.style.backgroundColor="red";
// // //  document.body.querySelector("div").style.backgroundColor="yellow"
// // //  document.title="fakestore api products"
// //   }, [category]);


// //   return (
// //     <div style={{ display: "flex", minHeight: "100vh", fontFamily: "Arial" }}>
     
// //       {/* Left Sidebar */}
// //       <div style={{ width: "200px", backgroundColor: "#f0f0f0", padding: "1rem" }}>
// //         <h3 style={{ marginBottom: "1rem" }}>Categories</h3>
// //         {categories.map(cat => (
// //           <div
// //             key={cat.value}
// //             onClick={() => setCategory(cat.value)}
// //             style={{
// //               padding: "10px",
// //               marginBottom: "8px",
// //               cursor: "pointer",
// //               backgroundColor: category === cat.value ? "#ddd" : "transparent",
// //               borderRadius: "6px",
// //               transition: "background-color 0.3s, transform 0.2s",
// //               boxShadow: category === cat.value ? "0 2px 6px rgba(0,0,0,0.2)" : "none"
// //             }}
// //             onMouseEnter={e => e.currentTarget.style.backgroundColor = "#e0e0e0"}
// //             onMouseLeave={e => e.currentTarget.style.backgroundColor = category === cat.value ? "#ddd" : "transparent"}
// //           >
// //             {cat.name}
// //           </div>
// //         ))}
// //       </div>


// //       {/* Right Content Area */}
// //       <div style={{ flex: 1, padding: "1rem" }}>
// //         <h2 style={{ marginBottom: "1rem" }}>
// //           {category === "all" ? "All Products" : `Category: ${category}`}
// //         </h2>


// //         {data.length === 0 ? (
// //           <p>Loading products...</p>
// //         ) : (
// //           <div style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
// //             {data.map(item => (
// //               <div
// //                 key={item.id}
// //                 style={{
// //                   border: "1px solid #ccc",
// //                   padding: "10px",
// //                   width: "200px",
// //                   borderRadius: "8px",
// //                   boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
// //                   transition: "transform 0.3s, box-shadow 0.3s",
// //                   backgroundColor: "#fff"
// //                 }}
// //                 onMouseEnter={e => {
// //                   e.currentTarget.style.transform = "scale(1.03)";
// //                   e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
// //                 }}
// //                 onMouseLeave={e => {
// //                   e.currentTarget.style.transform = "scale(1)";
// //                   e.currentTarget.style.boxShadow = "0 2px 6px rgba(0,0,0,0.1)";
// //                 }}
// //               >
// //                 <img
// //                   src={item.image}
// //                   alt={item.title}
// //                   style={{ width: "100%", height: "150px", objectFit: "contain", marginBottom: "10px" }}
// //                 />
// //                 <h4 style={{ fontSize: "14px", minHeight: "40px" }}>{item.title}</h4>
// //                 <p>₹ {item.price}</p>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // }


// // export default App;



import React, { useEffect, useState } from 'react'

const App = () => {
  const [data,setData]=useState([])
  const [cat,setCat]=useState("") // "electronics"
  useEffect(()=>{ 
    
    // replaces didMount   :-- only once after initail comp render on the screen
    let url="https://fakestoreapi.com/products"

    if( cat !== ""){  
       url=`https://fakestoreapi.com/products/category/${cat}`  
    }
      fetch(url).then(res=>res.json()).then(res=>{
        console.log(res)
        setData(res)
      })
  },[cat])

  // to stop mounting multiple times to happened after state updation recursively, i will use  empty dep array :-- []
  return (
    <div>
      
       <button onClick={()=>setCat("electronics")}>Electronics</button>
      <button onClick={()=>setCat("jewelery")}>Jewelry</button>
     <button onClick={()=>setCat("men's clothing")}>Men's</button>
       <button onClick={()=>setCat("women's clothing")}>Women's</button>
       
       {data.map((x)=>{
        return (
          <>
          <h1>{x.title}</h1>
          </>
        )
       })}

    </div>
  )
}

export default App




// comp render tarvata okkasari matarmey mounting jaruguddi
// if inc case, mounting lo statev updationg code r updater function undi antey, astate ni update chetsadi,okebvela state update aitey, malli comp re-renders, okavela re-render ayyindi antey, malli mounting jaragali, dini valla infinite times comp re-render avddi
// so, dini overcome cheyyakntey i need [] , empty depd array , which is 2 value of useEffect syntx

// and , if in case , useeffect lo first value ayina, function lo unna code malli execute avavli antey, i need enter into useEffect
// but [], empty depend array , nannu enter avvanivvadhu
//so, nenu useEffect lo unna code ni execute chepiichali natey i need to pass avalue in [], so by that when ever empty dpen array lo pass chesina state anedi upadte avuudo, update ayna pratisari, function lo code execute avvuddi,next comp re-renders avuyddi


// comp ni re-render cheyyalanukuntuna, but with 2nd life cycle method of react which is compDidUpdate(),
//so i ahve achived this with 2nd value which is [] and passing a value to that []
         