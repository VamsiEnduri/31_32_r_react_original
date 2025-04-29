import React from 'react'
import data from './data'
import "./Products.css"
import { Link } from 'react-router-dom'
const Products = () => {
  return (
    <div className='products_Container'>
        {data.products.map((item,index)=>{
              return (
                <div key={index} className='product'>
                    <img src={item.thumbnail}/>
                    <h2>{item.title}</h2>
                    <Link to={`/products/reviews/${item.id}`}><button>Reviews</button></Link>
                </div>
              )
        })}
    </div>
  )
}

export default Products