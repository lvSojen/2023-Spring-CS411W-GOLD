import React from "react"
import { Container } from "react-bootstrap"

import Favorites from "../components/common/Favorites"

function FavoritesScreen() {
  return (
    <Container className="py-3">
      <h1>Favorites</h1>
      <Favorites />
    </Container>
  )
}

export default FavoritesScreen
