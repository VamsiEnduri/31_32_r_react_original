import React from 'react'
import "./Navbarr.css"
// import { Navbar,Container,Nav} from "react-bootstrap"
// import Navbar from "react-bootstrap/Navbar"
import { FaCartShopping } from "react-icons/fa6";
import {Navbar,Container,Nav,Button,Badge} from "react-bootstrap"
const Navbarr = () => {
  return (
    <div>
        <Navbar expand="lg" className="bg-success" id='nav'>
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav>
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
          
            <Nav.Link href="#">
              Contact
            </Nav.Link>
          </Nav>


          {/* <Button variant="primary">
      Profile <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button> */}

    <FaCartShopping style={{color:"white",fontSize:30}}></FaCartShopping>
    <Badge bg="secondary">9</Badge>

      
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navbarr