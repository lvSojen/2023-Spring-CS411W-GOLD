import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

function ContactScreen() {
  return (
    <div>
      <div>ContactScreen</div>
      <Link to="/">
        <Button variant="info">click me</Button>
      </Link>
    </div>
  )
}

export default ContactScreen
