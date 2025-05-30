import React from 'react'
import {Button,Card} from "react-bootstrap"
import "./Recipes.css"
import {useNavigate} from "react-router-dom"
const Recipe = ({singleRecipe,data}) => {
    // console.log(useNavigate(),"navigate")
    const navigate=useNavigate()
    // console.log(singleRecipe)
  return (
    <div>
         <Card >
      <Card.Img variant="top" src={singleRecipe.image} />
      <Card.Body>
        <Card.Title>{singleRecipe.name}</Card.Title>
        <Card.Text>
        {singleRecipe.cuisine}
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigate(`/recipes/${singleRecipe.id}`)}}>More Details</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Recipe