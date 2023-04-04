import React from "react"
import Table from "react-bootstrap/Table"
import ResultRow from "./ResultRow"
import "./ResultRow.css"
function ResultTable(props) {
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
        {props.data.map((book) => (
          <ResultRow
            key={book.id}
            id={book.id}
            title={book.title}
            author={book.author}
            isbn={book.isbn}
            binding={book.binding}
            price={book.price}
            linkUrl={book.linkUrl}
            seller={book.seller}
          />
        ))}
      </tbody>
    </Table>
  )
}

export default ResultTable
