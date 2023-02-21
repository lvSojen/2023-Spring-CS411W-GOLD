import React from "react"
import SignUpForm from "../components/common/SignUpForm"
import { Container } from "react-bootstrap"

function SignUpScreen() {
  return (
    <Container className="py-3">
      <h1>Sign Up</h1>
      <SignUpForm/>
    </Container>
  )
}

export default SignUpScreen
