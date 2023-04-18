import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Card, Container } from "react-bootstrap"
import axios from "axios"
import ResultTable from "./ResultTable"

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

  // Configure parameters to avoid sending '[not specified]' string in request
  // Params with '[not specified]' as value will be set as empty strings
  const configureParams = (parameterValue, isISBN = false) => {
    if (parameterValue === "[not specified]") {
      return ""
    } else {
      if (isISBN) {
        return parameterValue;
      } else {
        const parsedValue = parseFloat(parameterValue)
        if (!isNaN(parsedValue)) {
          return (parsedValue - 4.99).toString()
        } else {
          return parameterValue
        }
      }
    }
  }
  
  // const configureParams = (parameterValue) => {
  //   if (parameterValue === "[not specified]") {
  //     return ""
  //   } else {
  //     return parameterValue
  //   }
  // }
  // Send request to database with relevant parameters
  // NOTE: The REST API currently does not support Edition and Language parameters
  const [books, setBooks] = useState([])
  const getBooks = (
    bookTitle,
    author,
    isbn,
    condition,
    binding,
    priceMin,
    priceMax
  ) => {
    axios
      .get("http://127.0.0.1:8000/books/", {
        params: {
          title: configureParams(bookTitle),
          isbn: configureParams(isbn, true),
          author: configureParams(author),
          condition: configureParams(condition),
          binding: configureParams(binding),
          price_max: configureParams(priceMax),
          price_min: configureParams(priceMin),
        },
      })
      .then((response) => {
        setBooks(response.data)
        console.log(response.data)
      })
  }

  // Use useEffect to fetch data when the component mounts
  useEffect(() => {
    getBooks(
      bookTitle,
      author,
      isbn,
      formatCondition(condition),
      formatBinding(binding),
      priceMin,
      priceMax
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookTitle, author, isbn, condition, binding, priceMin, priceMax])

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

      <Container className="mt-5">
        <p style={{ textAlign: "left" }}>{books.length} results found</p>
        {books.length > 0 && <ResultTable data={books} />}
      </Container>
    </Container>
  )
}
export default SearchResults
