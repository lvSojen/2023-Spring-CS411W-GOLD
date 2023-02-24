import React from "react"
import { Container } from "react-bootstrap"
import { MDBTypography, MDBIcon } from "mdb-react-ui-kit"
//import { Link } from "react-router-dom"
import TeamPhoto from "../components/common/TeamPhoto"
function AboutScreen() {
  return (
    <Container className="py-3">
      <MDBTypography listUnStyled className="mb-0">
        <h1>About Us</h1>
        <h4 className="mt-5">Our mission is to provide an online platform that...</h4>
        <li className="mb-1">
          <MDBIcon icon="check-circle" className="me-2 text-success" />
          Generates more traffic for independent bookstores
        </li>
        <li className="mb-1">
          <MDBIcon icon="check-circle" className="me-2 text-success" />
          Provides the best possible search results for book-lovers
        </li>
        <li className="mb-1">
          <MDBIcon icon="check-circle" className="me-2 text-success" />
          Provides personalized book recommendations
        </li>
      </MDBTypography>
      {/* <Link to="/" style={{ textDecoration: "none" }}> */}
        <h4 className="mt-5">
          Meet the Team
        </h4>
      {/* </Link> */}
      <TeamPhoto />
    </Container>
  )
}

export default AboutScreen
