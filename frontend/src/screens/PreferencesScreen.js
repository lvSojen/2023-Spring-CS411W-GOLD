import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"

function PreferencesScreen() {
  return (
    <Container className="py-3">
      <div>
        <h1>
          Preferences
        </h1>
      </div>
      <Link to="/">
        <Button variant="info">Back To Home</Button>
      </Link>
    </Container>
  )
}

export default PreferencesScreen