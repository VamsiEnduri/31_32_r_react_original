import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
const Cart = () => {
    const [cartItems,setCartItems]=useState([])
    useEffect(()=>{
        let carItemsFromLS=JSON.parse(localStorage.getItem("cartItems"))
        setCartItems(carItemsFromLS)
    },[])
    console.log(cartItems,"cart ")
  return (
    <div>
         <Table striped>
      <thead>
        <tr>
          <th>S.No</th>
          <th>dishName</th>
          <th>dishImage</th>
          <th>dishPrice</th>
        </tr>
      </thead>
      <tbody>
       {cartItems.map((item,index)=>{
        return (
            <>
            <tr>
                <td><p>{ index+1}</p></td>
                <td><p>{item.name}</p></td>
                <td><img src={item.image} alt="" width={70} /></td>
                <td><p>{item.rating}</p></td>
            </tr>
            </>
        )
       })}
      </tbody>
    </Table>
    </div>
  )
}

export default Cart