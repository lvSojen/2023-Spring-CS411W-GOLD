import React from "react"
import { useLocation } from "react-router-dom"
import { Card, Container } from "react-bootstrap"

const SearchResults = () => {
  const { state } = useLocation()

  // Destructure properties from state object with default values
  const {
    bookTitle = "[not specified]",
    author = "[not specified]",
    language = "[not specified]",
    isbn = "[not specified]",
    condition = "[not specified]",
    edition = "[not specified]",
    binding = "[not specified]",
    format = "[not specified]",
    priceMin = "[not specified]",
    priceMax = "[not specified]",
  } = state

  // Helper functions to format data
  const formatCondition = (condition) => {
    switch (condition) {
      case 1:
        return "New"
      case 2:
        return "Used"
      default:
        return "[not specified]"
    }
  }

  const formatEdition = (edition) => {
    switch (edition) {
      case 1:
        return "Edition 1"
      case 2:
        return "Edition 2"
      case 3:
        return "Edition 3"
      default:
        return "[not specified]"
    }
  }

  const formatBinding = (binding) => {
    switch (binding) {
      case 1:
        return "Paperback"
      case 2:
        return "Hardcover"
      default:
        return "[not specified]"
    }
  }

  const formatFormat = (format) => {
    switch (format) {
      case 1:
        return "Physical"
      case 2:
        return "Digital"
      default:
        return "[not specified]"
    }
  }

  return (
    <Container className="text-center">
      <h1>Search Results</h1>
      <h5>Showing all matches where:</h5>
      <Card>
        <Card.Body>
          <Card.Title>Title: {bookTitle}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Author: {author}
          </Card.Subtitle>
          <Card.Text>
            <p>Language: {language}</p>
            <p>ISBN: {isbn}</p>
            <p>Condition: {formatCondition(condition)}</p>
            <p>Edition: {formatEdition(edition)}</p>
            <p>Binding: {formatBinding(binding)}</p>
            <p>Format: {formatFormat(format)}</p>
            <p>Price Minimum: {priceMin}</p>
            <p>Price Maximum: {priceMax}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default SearchResults
