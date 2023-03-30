import React from "react"
import { Container } from "react-bootstrap"
import './Screens.css';
import RecData from "../components/common/RecData"

function RecommendationsScreen() {
  return (
    <Container className="py-3">
      <h1>Recommendations</h1>
      <RecData />
    </Container>
  )
}

export default RecommendationsScreen
