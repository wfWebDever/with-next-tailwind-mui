import Head from 'next/head'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import React, { useState, useEffect } from 'react'
import { Wrapper, Status } from '@googlemaps/react-wrapper'
import CustomMarker from './OverlayMarker'

const render = (status) => {
  return <h1>{status}</h1>
}

const MapComponent = ({ onClick, onIdle, children, style, ...options }) => {
  const ref = React.useRef(null)
  const [map, setMap] = React.useState()

  useEffect(() => {
    if (ref.current && !map) {
      const mapNew = new window.google.maps.Map(ref.current, {
        disableDefaultUI: true,
        gestureHandling: 'cooperative',
        ...options
      })
      setMap(mapNew)
    }
  }, [ref, map])
  const bounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(62.281819, -150.287132),
    new google.maps.LatLng(62.400471, -150.005608)
  )
  useEffect(() => {
    if (map) {
      ;['click', 'idle'].forEach((eventName) =>
        google.maps.event.clearListeners(map, eventName)
      )
      if (onClick) {
        map.addListener('click', onClick)
      }

      if (onIdle) {
        map.addListener('idle', () => onIdle(map))
      }
    }
  }, [map, onClick, onIdle])

  const onZoomIn = () => {
    map.setZoom(map.getZoom() + 1)
  }

  const onZoomOut = () => {
    map.setZoom(map.getZoom() - 1)
  }

  return (
    <Box className="w-full h-full relative">
      <Box ref={ref} className="w-full h-full"></Box>
      <CustomMarker map={map} bounds={bounds}>
        <span className="bg-white px-4 py-2 text-[#000] text-sm relative z-10 rounded-full">
          1222
        </span>
      </CustomMarker>
      <Stack className="controls zoom-control absolute right-5 top-5 bg-red border-0">
        <Button className="text-xl text-neutral" onClick={onZoomIn}>
          +
        </Button>
        <Button className="text-xl text-neutral" onClick={onZoomOut}>
          -
        </Button>
      </Stack>
    </Box>
  )
}

const chicago = { lat: 62.323907, lng: -150.109291 }

export default function Map() {
  const [open, setOpen] = useState(false)
  const [scroll, setScroll] = useState('paper')

  const [clicks, setClicks] = React.useState([])
  const [zoom, setZoom] = React.useState(13) // initial zoom
  const [center, setCenter] = React.useState(chicago)

  const onClick = (e) => {
    // avoid directly mutating state
    setClicks([...clicks, e.latLng])
  }

  const onIdle = (m) => {
    console.log('onIdle')
    setZoom(m.getZoom())
    setCenter(m.getCenter().toJSON())
  }

  const handleClickOpen = () => {
    setOpen(true)
    // setScroll(scrollType)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      <Box className="w-full h-screen">
        <Wrapper apiKey="" render={render}>
          <MapComponent center={center} zoom={zoom} />
        </Wrapper>
      </Box>
    </>
  )
}
