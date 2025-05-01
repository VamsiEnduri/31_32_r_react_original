import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../Products/pData'
const ProductDetails = () => {
    console.log(useParams())
    // const {id}=useParams()
    const routeId=useParams()
    
    console.log(routeId,"id")

    const matchedProduct=data.products.find(x=>x.id === Number(routeId.id) )
    console.log(matchedProduct)
    if(!matchedProduct){
        return <h1>no prodict fiund with that id</h1>
    }
  return (
    <div>
<img src={matchedProduct.thumbnail}/>
           <h1>{matchedProduct.title}</h1>
           <p>{matchedProduct.price}</p>
           <span>{matchedProduct.description}</span>
    </div>
  )
}

export default ProductDetails