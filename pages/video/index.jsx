import React, { useState, useEffect } from 'react'
// import ReactPlayer from 'react-player/lazy'
import { Box } from '@mui/material'
import dynamic from 'next/dynamic'

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

function MyComponent() {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])
  if (typeof window === 'undefined') {
    return <></>
  }
  return <ReactPlayer url="https://www.youtube.com/watch?v=TasYtAcUcHA" />
  // return (
  //   <>
  //     {domLoaded ? (
  //       <Box>
  //         <ReactPlayer url="https://www.youtube.com/watch?v=TasYtAcUcHA" />
  //       </Box>
  //     ) : null}
  //   </>
  // )
}

export default MyComponent
