import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"

function AboutScreen() {
  return (
    <Container className="py-3">
      <div>
        <h1>
          About Page
        </h1>
        <h3>
          Our Mission
        </h3>
        <p>
          INSERT BUNCH OF TEXT HERE
        </p>
        <h3>
          Meet the Team
        </h3>
        <p>
          INSERT BUNCH OF TEXT HERE
        </p>
      </div>
      <Link to="/">
        <Button variant="info">Back To Home</Button>
      </Link>
    </Container>
  )
}

export default AboutScreen