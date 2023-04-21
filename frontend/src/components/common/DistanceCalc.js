function toRadians(degrees) {
  return degrees * (Math.PI / 180)
}

function getDistance(lat1, lon1, lat2, lon2) {
  // Convert latitude and longitude from degrees to radians
  lat1 = toRadians(lat1)
  lon1 = toRadians(lon1)
  lat2 = toRadians(lat2)
  lon2 = toRadians(lon2)

  // Haversine formula
  const differenceLat = lat2 - lat1
  const differenceLon = lon2 - lon1
  const a =
    Math.sin(differenceLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(differenceLon / 2) ** 2
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  // Earth's radius in km
  const R = 6371

  // Calculate the distance
  const distance = R * c
  return distance
}
module.exports = getDistance
