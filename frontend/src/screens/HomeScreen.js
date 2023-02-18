import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"
import SearchForm from "../components/common/SearchForm"
import SearchBook from "../components/common/SearchBook"
import Badge from "react-bootstrap/Badge"
import './Screens.css';

function HomeScreen() {
  return (
    <Container className="py-3">
      <h1>
        <Badge bg="secondary">411W Gold HomeScreen</Badge>
      </h1>
      <SearchBook />
      <Link to="/contact">
        <Button variant="info">Contact us!</Button>
      </Link>
    </Container>
  )
}

export default HomeScreen
