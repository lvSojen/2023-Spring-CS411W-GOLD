import React from "react"
import ContactForm from "../components/common/ContactForm"
import { Container } from "react-bootstrap"

function ContactScreen() {
  return (
    <Container className="py-3">
      <h1>Contact Us</h1>
      <ContactForm/>
    </Container>
  )
}

export default ContactScreen
