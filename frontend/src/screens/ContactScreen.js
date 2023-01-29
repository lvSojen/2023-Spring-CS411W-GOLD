import React from "react"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.css"

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
