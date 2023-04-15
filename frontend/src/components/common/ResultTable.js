import React, { useState } from "react"
import Table from "react-bootstrap/Table"
import ResultRow from "./ResultRow"
import Pagination from "react-js-pagination"
import "../style/ResultRow.css"
function ResultTable(props) {
  console.log(props)
  const [activePage, setActivePage] = useState(1)
  const [selectedVariants, setSelectedVariants] = useState({})
  const itemsPerPage = 10

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber)
  }
  const displayedData = props.data.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  )
  const handleVariantChange = (isbn, variantIndex) => {
    setSelectedVariants({ ...selectedVariants, [isbn]: variantIndex })
  }
  return (
    <>
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
          {displayedData.map((book, index) => (
            <ResultRow
              key={index}
              index={(activePage - 1) * itemsPerPage + index + 1}
              title={book.title}
              author={book.author}
              isbn={book.isbn}
              binding={book.binding}
              condition={
                book.availability[selectedVariants[book.isbn] || 0].condition
              }
              price={book.availability[selectedVariants[book.isbn] || 0].price}
              linkUrl={
                book.availability[selectedVariants[book.isbn] || 0].link_url
              }
              seller={
                book.availability[selectedVariants[book.isbn] || 0].book_store
              }
              handleVariantChange={handleVariantChange}
              data={book}
            />
          ))}
        </tbody>
      </Table>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={props.data.length}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
      />
    </>
  )
}

export default ResultTable
