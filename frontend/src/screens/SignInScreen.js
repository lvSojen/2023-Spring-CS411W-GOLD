import React from "react"
import SignInForm from "../components/common/SignInForm"
import { Container } from "react-bootstrap"

function SignInScreen() {
  return (
    <Container className="py-3">
      <h1>Sign In</h1>
      <SignInForm/>
    </Container>
  )
}

export default SignInScreen
