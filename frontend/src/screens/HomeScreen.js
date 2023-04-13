import React from "react"
//import { Link } from "react-router-dom"
//import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"
//import SearchForm from "../components/common/SearchForm"
import SearchBook from "../components/common/SearchBook"
import Badge from "react-bootstrap/Badge"
import "./HomeScreen.css"

function HomeScreen() {
  return (
    <div className="homescreen-css">
      <Container className="py-3">
        <h1 id="search">
          <Badge bg="light">Booked Search</Badge>
        </h1>
        <SearchBook />
      </Container>
    </div>
  )
}

export default HomeScreen
