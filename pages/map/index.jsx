import { useState, useEffect } from 'react'
import {
  APIProvider,
  Map,
  Marker,
  useMapsLibrary
} from '@vis.gl/react-google-maps'
import { Box } from '@mui/material'

const apiKey = process.env.GOOGLE_MAP_API_KEY
// const mapOptions = {
//   center: center,
//   zoom: 8,
//   language: 'en-us',
//   gestureHandling: 'greedy'
//   // center: { lat: -34.397, lng: 150.644 },
//   // zoom: 8
// }

const center = { lat: 34.0211769, lng: -118.3012355 }

function MyComponent() {
  const placesLib = useMapsLibrary('places')
  const [placesService, setPlacesService] = useState(null)

  useEffect(() => {
    if (!placesLib) return

    setPlacesService(new placesLib.PlacesService())
  }, [placesLib])

  useEffect(() => {
    if (!placesService) return

    // ...use placesService...
  }, [placesService])

  return (
    <Box className="w-full h-screen">
      <APIProvider apiKey={apiKey}>
        <Map center={center} zoom={10}>
          <Marker position={center} />
        </Map>
      </APIProvider>
    </Box>
  )
}

export default MyComponent
