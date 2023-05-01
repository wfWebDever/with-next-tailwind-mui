import { Box } from '@mui/material'
import React, { useEffect, useRef } from 'react'

const CustomMarker = ({ children, map, bounds }) => {
  const ref = useRef(null)

  class OverlayMarker extends google.maps.OverlayView {
    bounds
    div
    constructor(bounds, dom) {
      super()
      this.bounds = bounds
      this.div = dom
    }

    onAdd() {
      // Add the element to the "overlayLayer" pane.
      const panes = this.getPanes()

      panes.overlayLayer.appendChild(this.div)
    }
    draw() {
      // We use the south-west and north-east
      // coordinates of the overlay to peg it to the correct position and size.
      // To do this, we need to retrieve the projection from the overlay.
      const overlayProjection = this.getProjection()
      // Retrieve the south-west and north-east coordinates of this overlay
      // in LatLngs and convert them to pixel coordinates.
      // We'll use these coordinates to resize the div.
      const sw = overlayProjection.fromLatLngToDivPixel(
        this.bounds.getSouthWest()
      )
      const ne = overlayProjection.fromLatLngToDivPixel(
        this.bounds.getNorthEast()
      )

      // Resize the image's div to fit the indicated dimensions.
      // if (this.div) {
      //   this.div.style.left = sw.x + 'px'
      //   this.div.style.top = ne.y + 'px'
      // }
    }
    onRemove() {
      if (this.div) {
        this.div.parentNode.removeChild(this.div)
        delete this.div
      }
    }
    hide() {
      if (this.div) {
        this.div.style.visibility = 'hidden'
      }
    }
    show() {
      if (this.div) {
        this.div.style.visibility = 'visible'
      }
    }
    toggle() {
      if (this.div) {
        if (this.div.style.visibility === 'hidden') {
          this.show()
        } else {
          this.hide()
        }
      }
    }
    toggleDOM(map) {
      if (this.getMap()) {
        this.setMap(null)
      } else {
        this.setMap(map)
      }
    }
  }
  useEffect(() => {
    const marker = new OverlayMarker(bounds, ref.current)
    marker.setMap(map)
  }, [ref.current])

  return <Box ref={ref}>{children}</Box>
}

export default CustomMarker
