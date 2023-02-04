import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"
import SearchForm from "../components/common/SearchForm"
function HomeScreen() {
  return (
    <Container>
      <div className="mt-5">411W Gold HomeScreen</div>
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
