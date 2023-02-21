import React from "react"
import { Container } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
function BookedSearch() {
  return (
    <Container className="py-3">
      <Form>
      <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </Container>
  )
}

export default BookedSearch
