import React from "react"
import { Navbar, Container, Nav, Form, FormControl } from "react-bootstrap"
import { Link } from "react-router-dom"

function Header({ setSearchQuery }) {
  return (
    <Navbar style={{background: 'linear-gradient(to right, #030202, #91221E, #030202, #030202)',  color: 'white'}} bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
           <h4>
            <i class="fa-solid fa-book-open-reader"></i> BookTracker
            </h4>
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/books">
            Book List
          </Nav.Link>
          <Nav.Link as={Link} to="/add">
            Add Book
          </Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search books"  className="me-2" style={{backgroundColor:"white", color:"black", border:"none"}} onChange={(e) => setSearchQuery(e.target.value)}/>
        </Form>
      </Container>
    </Navbar>
  )
}

export default Header
