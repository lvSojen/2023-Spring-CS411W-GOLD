import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"

function ContactScreen() {
  return (
    <Container className="py-3">
      <div>ContactScreen</div>
      <Link to="/">
        <Button variant="info">click me</Button>
      </Link>
    </Container>
  )
}

export default ContactScreen
