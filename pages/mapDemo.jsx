import React from 'react'
import MapGoogle from './mapGoogle'

function Demo() {
  const data = [
    {
      id: 1,
      lat: 34.0211769,
      lng: -118.3012355
    },
    {
      id: 2,
      lat: 34.01974756570186,
      lng: -118.30203367578844
    },
    {
      id: 3,
      lat: 34.0198535,
      lng: -118.2979006
    },
    {
      id: 4,
      lat: 34.027642,
      lng: -118.286983
    },
    {
      id: 5,
      lat: 34.0264071,
      lng: -118.3020653
    }
  ]
  return (
    <div className="w-full h-[1000px]">
      <MapGoogle data={data}></MapGoogle>
    </div>
  )
}

export default React.memo(Demo)
