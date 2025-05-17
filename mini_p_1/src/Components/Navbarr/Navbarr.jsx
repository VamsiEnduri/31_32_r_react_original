import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { Badge } from "react-bootstrap";
import "./Navbarr.css";

function Navbarr() {
    const cartItems=JSON.parse(localStorage.getItem("cartItems"))
    const favItems=JSON.parse(localStorage.getItem("favItems"))
  return (
    <Navbar expand="lg" className="bg-primary" id="navbar">
      <Container fluid>
        <Navbar.Brand>VamsMart</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/recipes">Recipes</Link>
            <Link to="/cart">
              <CiShoppingCart
                size={30}
                style={{ color: "white", fontWeight: 600 }}
              />
              <Badge bg="secondary">{cartItems.length}</Badge>
            </Link>

            <Link to="/favs">
              <CiHeart size={30} style={{ color: "white", fontWeight: 600 }} />
              <Badge bg="secondary">{favItems.length}</Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
