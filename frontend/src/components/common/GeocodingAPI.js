// // distance.js
// const fetch = require("node-fetch")

// const getGeocoordinates = async (zip1, zip2) => {
//   const geocodeURL = "https://maps.googleapis.com/maps/api/geocode/json"

//   const getCoordinates = async (zip) => {
//     const response = await fetch(`${geocodeURL}?address=${zip}&key=${apiKey}`)
//     const text = await response.text()

//     try {
//       const data = JSON.parse(text)
//       return data.results[0].geometry.location
//     } catch (error) {
//       console.error("Error parsing geocoding response:", error)
//     }
//   }

//   const coordinates1 = await getCoordinates(zip1)
//   const coordinates2 = await getCoordinates(zip2)

//   return {
//     coordinates1,
//     coordinates2,
//   }
// }

// module.exports = getGeocoordinates

async function getGeocoordinates(zipcode) {
  const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=${API_KEY}`
  );

  if (response.status !== 200) {
    throw new Error(`Error fetching geocoding data: ${response.status}`);
  }

  const data = await response.json();

  if (data.status === "OK") {
    const coordinates = data.results[0].geometry.location;
    return coordinates;
  } else {
    throw new Error(`Error in geocoding API response: ${data.status}`);
  }
}

export default getGeocoordinates;
