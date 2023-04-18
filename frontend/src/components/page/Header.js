import React from "react"
import { Button, Container } from "react-bootstrap"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { useLocation } from "react-router-dom"
import { Link } from "react-scroll"
function Header() {
  const location = useLocation()
  const headerClassName = location.pathname === "/" ? "home-header" : ""

  return (
    <header className={`${headerClassName}`}>
      <div className="text-container">
        <h1>Welcome to the Booked Website</h1>
        {location.pathname === "/" ? (
          <Link
            to="search"
            smooth={true}
            duration={0}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button variant="primary" className="" style={{ margin: "0 auto" }}>
              Find Your Next Read
            </Button>
          </Link>
        ) : null}
      </div>
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
              <Nav.Link href="/recommendations">
                <i class="fa fa-thumbs-up"></i> Recommendations
              </Nav.Link>
              <Nav.Link href="/signin">
                <i class="fa-solid fa-right-to-bracket"></i> Sign In
              </Nav.Link>
              <Nav.Link href="/signup">
                <i class="fa-solid fa-user-plus"></i> Sign Up
              </Nav.Link>
              <Nav.Link href="/about">
                <i class="fa-solid fa-address-card"></i> About
              </Nav.Link>
              <Nav.Link href="/help">
                <i class="fa-sharp fa-solid fa-circle-info"></i> Help
              </Nav.Link>
              <Nav.Link href="/FAQ">
                <i class="fa-solid fa-question"></i> FAQ
              </Nav.Link>
              <Nav.Link href="/favorites">
                <i class="fa-solid fa-star"></i> Favorites
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
