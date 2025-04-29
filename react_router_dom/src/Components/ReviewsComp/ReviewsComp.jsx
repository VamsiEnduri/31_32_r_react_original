import React from 'react'
import {useParams} from "react-router-dom"
import data from "../Products/data"
const ReviewsComp = () => {
    console.log(useParams())
    const {id}=useParams()
    const matchedProcut=data.products.find((p)=>p.id === parseInt(id))
    console.log(matchedProcut)
  return (
    <div>ReviewsComp
        <h1>{id}</h1>
        {matchedProcut.reviews.map((r,index)=>{
      return (
        <div style={{border:"1px solid black"}} key={index}>
            <h1>{r.reviewerName}</h1>
            <p>{r.rating}</p>
            <span>{r.comment}</span>
        </div>
      )
        })}
    </div>
  )
}

export default ReviewsComp