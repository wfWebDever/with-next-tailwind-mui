import React from 'react'
import {
  GoogleMap,
  useLoadScript,
  InfoBox,
  OverlayView
} from '@react-google-maps/api'

const containerStyle = {
  width: '1000px',
  height: '800px'
}

const center = {
  lat: -3.745,
  lng: -38.523
}

const divStyle = {
  background: 'white',
  border: '1px solid #ccc',
  padding: 15
}

function MyComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: '',
    libraries: []
    // ...otherOptions
  })
  const onLoad = React.useCallback((mapInstance) => {
    // do something with map Instance
    console.info(mapInstance)
  })
  const onClick = () => {
    console.info('I have been clicked!')
  }

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
    >
      <OverlayView
        position={center}
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      >
        <div style={divStyle}>
          <h1>OverlayView</h1>

          <button onClick={onClick} type="button">
            Click me
          </button>
        </div>
      </OverlayView>
    </GoogleMap>
  ) : null
}

export default React.memo(MyComponent)
