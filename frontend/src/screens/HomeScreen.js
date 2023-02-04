import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"
import SearchForm from "../components/common/SearchForm"
import Badge from "react-bootstrap/Badge"
function HomeScreen() {
  return (
    <Container className="py-3">
      <h1>
        <Badge bg="secondary">411W Gold HomeScreen</Badge>
      </h1>
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <SearchForm />
      <Link to="/contact">
        <Button variant="info">click me</Button>
      </Link>
    </Container>
  )
}

export default HomeScreen
