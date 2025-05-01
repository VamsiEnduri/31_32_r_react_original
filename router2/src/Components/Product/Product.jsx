import React from 'react'
import "./Product.css"
import { Link } from 'react-router-dom'
const Product = (singleP) => {
    console.log(singleP)
  return (
    <div className='productCard' >
        <img src={singleP.singleProduct.thumbnail}/>
       <h1> {singleP.singleProduct.title}</h1>
       <p> {singleP.singleProduct.price}</p>
       <Link to={`/products/product/${singleP.singleProduct.id}`}>
       <span>viewDetails</span>
       </Link>
    </div>
  )
}

export default Product