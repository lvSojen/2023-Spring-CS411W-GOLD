import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
function Footer() {
  return (
    <footer>
      <Container className="py-3">
        <Row>
          <Col className="text-center">Spring 2023 | CS411W | Team Gold</Col>
        </Row>
        <Row>
          <Col className="text-center">
            <Link to="https://odu.edu/">Old Dominion University</Link> |{" "}
            <Link to="https://odu.edu/compsci">ODU CS Department</Link>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            Theme by <Link to="https://bootswatch.com/zephyr/">zephyr</Link>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
