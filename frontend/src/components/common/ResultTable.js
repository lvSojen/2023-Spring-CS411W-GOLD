import React, { useState, useCallback, useEffect } from "react"
import Table from "react-bootstrap/Table"
import ResultRow from "./ResultRow"
import Pagination from "react-js-pagination"
import "../style/ResultRow.css"
import getGeocoordinates from "./GeocodingAPI"
import getDistance from "./DistanceCalc"
function ResultTable(props) {
  const [activePage, setActivePage] = useState(1)
  const [selectedVariants, setSelectedVariants] = useState({})
  const [uniqueData, setUniqueData] = useState([])
  const itemsPerPage = 10
  const storeGeocoordinates = (zipcode, latitude, longitude) => {
    const geocoordinates = {
      latitude: latitude,
      longitude: longitude,
    }
    localStorage.setItem(`${zipcode}`, JSON.stringify(geocoordinates))
  }
  console.log("This :" + props.distance)
  console.log("this zip" + props.zipcode)
  const getStoredOrFetchGeocoordinates = async (zipcode) => {
    if (zipcode === null || !zipcode) {
      console.error("Invalid or not specified zipcode")
      return null
    }
    const storedCoordinates = localStorage.getItem(`${zipcode}`)

    if (storedCoordinates) {
      return JSON.parse(storedCoordinates)
    } else {
      try {
        const geocoordinates = await getGeocoordinates(zipcode)
        console.log(geocoordinates)
        storeGeocoordinates(zipcode, geocoordinates.lat, geocoordinates.lng)
        return geocoordinates
      } catch (error) {
        console.error(
          `Error fetching geocoordinates for zipcode ${zipcode}: ${error.message}`
        )
        // You can return a default value here if necessary
        return null
      }
    }
  }

  // console.log(props.data[0].availability[0].book_store.locations[0].zip_code)
  // console.log("This is me" + props.zipcode)
  // Remove duplicates from the data array
  // const uniqueData = Array.from(new Set(props.data.map((book) => book.isbn)))
  //   .map((isbn) => {
  //     return props.data.find((book) => book.isbn === isbn)
  //   })
  //   .filter((book) => book !== undefined)
  const fetchAndCalculateDistances = useCallback(async () => {
    console.log("fetchAndCalculateDistances called")
    if (props.zipcode === null && props.distance === null) {
      const uniqueBooks = Array.from(
        new Set(props.data.map((book) => book.isbn))
      )
        .map((isbn) => props.data.find((book) => book.isbn === isbn))
        .filter((book) => book !== undefined)
      setUniqueData(uniqueBooks)
    } else {
      const buyerCoordinates =
        props.zipcode !== null
          ? await getStoredOrFetchGeocoordinates(props.zipcode)
          : null

      if (!buyerCoordinates) {
        console.error("Unable to fetch buyer coordinates")
        return
      }
      const max_distance = props.distance

      const fetchedBooks = await Promise.all(
        Array.from(new Set(props.data.map((book) => book.isbn))).map(
          async (isbn) => {
            const book = props.data.find((book) => book.isbn === isbn)

            if (book) {
              book.distances =
                props.zipcode !== null
                  ? await Promise.all(
                      book.availability.map(async (variant) => {
                        const storeCoordinates =
                          await getStoredOrFetchGeocoordinates(
                            variant.book_store.locations[0].zip_code
                          )

                        const distance = getDistance(
                          buyerCoordinates.latitude,
                          buyerCoordinates.longitude,
                          storeCoordinates.latitude,
                          storeCoordinates.longitude
                        )

                        return distance
                      })
                    )
                  : new Array(book.availability.length).fill(undefined)

              const withinMaxDistance =
                max_distance === null
                  ? true
                  : book.distances.some((distance) => distance <= max_distance)

              return withinMaxDistance ? book : undefined
            }
          }
        )
      )

      const filteredBooks = fetchedBooks.filter((book) => book !== undefined)
      setUniqueData(filteredBooks)
    }
  }, [props.data, props.zipcode, props.distance])
  // useEffect(() => {
  //   fetchAndCalculateDistances()
  // }, [fetchAndCalculateDistances])
  useEffect(() => {
    if (props.zipcode !== null) {
      fetchAndCalculateDistances()
    } else {
      const uniqueBooks = Array.from(
        new Set(props.data.map((book) => book.isbn))
      )
        .map((isbn) => props.data.find((book) => book.isbn === isbn))
        .filter((book) => book !== undefined)
      setUniqueData(uniqueBooks)
    }
  }, [fetchAndCalculateDistances, props.zipcode, props.data])
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber)
  }

  const displayedData = uniqueData.slice(
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
          {/* console.log(displayedData) */}
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
                  .StoreName
              }
              handleVariantChange={handleVariantChange}
              data={book}
              homezip={props.zipcode}
              storezip={
                book.availability[selectedVariants[book.isbn] || 0].book_store
                  .locations[0].zip_code
              }
              range={
                props.zipcode !== null
                  ? book.distances[selectedVariants[book.isbn] || 0]
                  : undefined
              }
            />
          ))}
        </tbody>
      </Table>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsPerPage}
        totalItemsCount={uniqueData.length}
        pageRangeDisplayed={5}
        onChange={handlePageChange}
        itemClass="page-item"
        linkClass="page-link"
      />
    </>
  )
}

export default ResultTable
