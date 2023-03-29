import React from "react"
import HelpComp from "../components/common/HelpComp"
import { Container } from "react-bootstrap"

function HelpScreen() {
  return (
    <Container className="py-3">
      <h1>Sign In</h1>
      <HelpComp/>
    </Container>
  )
}

export default HelpScreen