import React from "react"
import HelpComp from "../components/common/HelpComp"
import { Container } from "react-bootstrap"

function HelpScreen() {
  return (
    <Container className="py-3">
      <h1>BookedSearch.com help</h1> 
      <HelpComp/>
    </Container>
  )
}

export default HelpScreen