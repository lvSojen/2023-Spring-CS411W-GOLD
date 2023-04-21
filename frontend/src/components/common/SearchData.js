import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { Card, Container } from "react-bootstrap"
import axios from "axios"
import ResultTable from "./ResultTable"

const SearchResults = () => {
  const { state } = useLocation()

  // Destructure properties from state object with default values
  const {
    bookTitle = null,
    author = null,
    language = null,
    isbn = null,
    condition = null,
    edition = null,
    binding = null,
    format = null,
    priceMin = null,
    priceMax = null,
    zipcode = null,
    distance = null,
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
  const configureParams = (parameterValue, isPrice = false) => {
    if (parameterValue === "[not specified]") {
      return ""
    } else {
      const parsedValue = parseFloat(parameterValue)
      if (!isNaN(parsedValue) && isPrice) {
        return (parsedValue - 4.99).toString()
      } else {
        return parameterValue
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
  // let urls = ["http://127.0.0.1:8000/books/", "http://localhost:8000/near-me/"]
  // let urls = ["http://127.0.0.1:8000/books/"]
  let urls = ["http://localhost:8000/near-me/"]
  // const requests = urls.map((url) => axios.get(url))
  const getBooks = (
    bookTitle,
    author,
    isbn,
    condition,
    binding,
    priceMin,
    priceMax,
    zipcode,
  ) => {
    const params = {
      title: configureParams(bookTitle),
      isbn: configureParams(isbn),
      author: configureParams(author),
      condition: configureParams(condition),
      binding: configureParams(binding),
      price_max: configureParams(priceMax, true),
      price_min: configureParams(priceMin, true),
      zipcode: configureParams(zipcode),
    }

    const requests = urls.map((url) => axios.get(url, { params }))

    Promise.all(requests)
      .then((responses) => {
        // Combine the data from both responses
        const combinedData = responses.flatMap((response) => response.data)
        setBooks(combinedData)
        // console.log(combinedData)
      })
      .catch((error) => {
        // Handle any errors that occurred during the requests
        console.error("Error fetching data from both endpoints:", error)
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
      priceMax,
      zipcode,
      distance,
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [bookTitle, author, isbn, condition, binding, priceMin, priceMax, zipcode, distance])

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
            <p>Minimum Price: {priceMin}</p>
            <p>Maximum Price: {priceMax}</p>
            <p>ZipCode: {zipcode}</p>
            <p>Maximum Distance: {distance} miles</p>
          </Card.Text>
        </Card.Body>
      </Card>

      <Container className="mt-5">
        <p style={{ textAlign: "left" }}>{books.length} results found</p>
        {books.length > 0 && <ResultTable data={books} zipcode={zipcode} distance={distance}/>}
      </Container>
    </Container>
  )
}
export default SearchResults
