import React from 'react'
import "./Products.css"
import Product from '../Product/Product'
const Products = (prop) => {
    console.log(prop.productsData,"prop data")
    const d=prop.productsData
  return (
    <div className='products'>
        {/* {d.map((p)=>{
            return (
                <div style={{border:"2px solid black",marginTop:"20px"}}>
                    <h1>{p.title}</h1>
                    <p>{p.price}</p>
                </div>
            )
        })} */}

        {
            d.map((x)=>{
                return (
                    <>
                        <Product singleProduct={x} />
                    </>
                )
            })
        }
    </div>
  )
}

export default Products