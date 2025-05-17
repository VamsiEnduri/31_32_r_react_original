import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
const Favs = () => {
    const [favItems,setFavItems]=useState([])
    useEffect(()=>{
        let favItemsFromLS=JSON.parse(localStorage.getItem("favItems"))
        setFavItems(favItemsFromLS)
    },[])
  return (
    <div>


     <h1 style={{textAlign:"center",fontSize:"50px"}}>   FavItems</h1>
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
       {favItems.map((item,index)=>{
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

export default Favs