import React from "react"
import { Container } from "react-bootstrap"
import { MDBTypography, MDBIcon } from "mdb-react-ui-kit"
import { Link } from "react-router-dom"
function AboutScreen() {
  return (
    <Container className="py-3">
      <MDBTypography listUnStyled className="mb-0">
        <h1>Our mission is to provide an online platform that</h1>
        <li className="mb-1">
          <MDBIcon icon="check-circle" className="me-2 text-success" />
          Generate more traffic for Independent bookstores
        </li>
        <li className="mb-1">
          <MDBIcon icon="check-circle" className="me-2 text-success" />
          Provide best possible search results for book-lovers
        </li>
        <li className="mb-1">
          <MDBIcon icon="check-circle" className="me-2 text-success" />
          Book recommendations
        </li>
      </MDBTypography>
      <Link to="/" style={{ textDecoration: "none" }}>
        <h4 className="mt-5">
          <span>Meet the team</span> <i className="fa-solid fa-greater-than fa-xs"></i>
        </h4>
      </Link>
    </Container>
  )
}

export default AboutScreen
