import React, { Component } from "react";
import p_Data from "../../data";
import Product from "../Product/Product";
export default class Products extends Component {
  render() {
    return (
      <div>
        {p_Data.map((product) => {
          return (
            <>
              {/* <h1>{product.title}</h1> */}
              <Product singleProduct={product} />
            </>
          );
        })}
      </div>
    );
  }
}
