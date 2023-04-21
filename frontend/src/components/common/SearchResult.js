import React, { useState, useEffect } from "react"
import { Container } from "react-bootstrap"
import ResultTable from "./ResultTable"

function SearchResult() {
  const [booksData, setBooksData] = useState([])

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("/books.json")
        const data = await response.json()
        setBooksData(data.books)
      } catch (error) {
        console.error("Error fetching book data:", error)
      }
    }

    fetchBooks()
  }, [])
  // console.log("booksData:", booksData)
  return (
    <Container className="mt-5">
      <p>13,000 + results</p>
      {booksData.length > 0 && <ResultTable data={booksData} />}
      {booksData.length > 0 ? <p>Found</p> : <p>Nothing found</p>}
    </Container>
  )
}

export default SearchResult
