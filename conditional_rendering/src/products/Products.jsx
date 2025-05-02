import React from "react";
import p_data from './data'
import Electronics from "./Electronics";
import Jewelery from "./Jewelery";
import WomensComp from "./WomensComp";
import MensComp from "./MensComp";
// import p_data from "./data";
const Products = () => {
  let userChoosedCatPrompt = prompt("enter catgeory of product");
 
    return (
      <div>

        {/* {
            p_data.map((item)=>{


                if (userChoosedCatPrompt === item.category) {
                    return <Electronics singleP={item}/>;
                  } else if (userChoosedCatPrompt === "jewelery") {
                    return <Jewelery />;
                  } else if (userChoosedCatPrompt === "men's clothing") {
                    return <MensComp />;
                  } else if (userChoosedCatPrompt === "women's clothing") {
                    return <WomensComp />;
                  } else {
                    return 
                  }
            
             })
        } */}


{
            p_data.filter((item)=>{


                if (userChoosedCatPrompt === item.category) {
                    return <Electronics singleP={item}/>;
                  } else if (userChoosedCatPrompt === "jewelery") {
                    return <Jewelery />;
                  } else if (userChoosedCatPrompt === "men's clothing") {
                    return <MensComp />;
                  } else if (userChoosedCatPrompt === "women's clothing") {
                    return <WomensComp />;
                  } else {
                    return 
                  }
            
             })
        }
      </div>
    )
};

export default Products;
