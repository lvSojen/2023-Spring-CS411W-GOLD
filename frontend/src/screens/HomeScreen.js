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
        <h2 id="search">
          <b>Booked Search</b>
        </h2>
        <SearchBook />
      </Container>
    </div>
  )
}

export default HomeScreen
