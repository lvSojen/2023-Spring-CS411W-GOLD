import React, { useState } from "react"

function TestDistance() {
  const [distance, setDistance] = useState(null)

  const getDistance = async (zip1, zip2) => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
    const geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json"
    const distanceMatrixURL =
      "https://maps.googleapis.com/maps/api/distancematrix/json"

    const getCoordinates = async (zip) => {
      const response = await fetch(`${geocodeURL}?address=${zip}&key=${apiKey}`)
      const text = await response.text()
      //   console.log("Geocoding response text:", text)

      try {
        const data = JSON.parse(text)
        console.log(data.results[0].geometry.location)
        return data.results[0].geometry.location
      } catch (error) {
        console.error("Error parsing geocoding response:", error)
      }
    }

    const coord1 = await getCoordinates(zip1)
    const coord2 = await getCoordinates(zip2)

    const response = await fetch(
      `${distanceMatrixURL}?origins=${coord1.lat},${coord1.lng}&destinations=${coord2.lat},${coord2.lng}&key=${apiKey}`
    )
    const text = await response.text()
    // console.log("Distance Matrix response text:", text)

    try {
      const data = JSON.parse(text)
      setDistance(data.rows[0].elements[0].distance.text)
    } catch (error) {
      console.error("Error parsing distance matrix response:", error)
    }
  }

  return (
    <div>
      <button onClick={() => getDistance("23325", "10001")}>
        Get Distance
      </button>
      {distance && <p>Distance: {distance}</p>}
    </div>
  )
}

export default TestDistance
