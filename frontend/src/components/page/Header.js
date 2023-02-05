import React from "react"
import { Container } from "react-bootstrap"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

function Header() {
  return (
    <header className="pb-5">
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <i className="fa-solid fa-book"></i> Booked
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">
                <i class="fa-solid fa-house"></i> Home
              </Nav.Link>
              <Nav.Link href="/signin">
                <i class="fa-solid fa-house"></i> Sign In
              </Nav.Link>
              <Nav.Link href="/signup">
                <i class="fa-solid fa-house"></i> Sign Up
              </Nav.Link>
              <Nav.Link href="/contact">
                <i className="fa-solid fa-envelope"></i> Contact
              </Nav.Link>
              <Nav.Link href="/about">
                <i className="fa-solid fa-house"></i> About
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header