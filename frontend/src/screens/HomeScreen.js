import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"


function HomeScreen() {
  return (
    <div>
      <div>411W Gold HomeScreen</div>
      <Link to="/contact">
        <Button variant="info">click me</Button>
      </Link>
    </div>
  )
}

export default HomeScreen
