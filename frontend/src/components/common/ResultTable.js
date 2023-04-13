import React from "react"
import Table from "react-bootstrap/Table"
import ResultRow from "./ResultRow"
import "./ResultRow.css"
function ResultTable(props) {
  console.log(props)
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Book Seller</th>
          <th>Book Info</th>
          <th>Distance</th>
          <th>Shipping</th>
          <th>Total</th>
          <th>Favorite</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((book, index) => (
          <ResultRow
            key={index}
            index={index + 1}
            title={book.title}
            author={book.author}
            isbn={book.isbn}
            binding={book.binding}
            condition={book.availability[0].condition}
            price={book.availability[0].price}
            linkUrl={book.availability[0].link_url}
            seller={book.availability[0].book_store}
          />
        ))}
      </tbody>
    </Table>
  )
}

export default ResultTable
