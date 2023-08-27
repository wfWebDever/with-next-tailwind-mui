import { Box, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

export default function SetTime() {
  const [time, setTime] = useState(100)

  // 开发模式下 useEffect执行了2次，所以setInterval执行了2次，然后就会有2个setInterval对象，每个对象都会在1秒之后time -1 这样就会一共 -2，所以需要清理第一次的setInterval
  useEffect(() => {
    console.info('effect runs ')
    const timer = setInterval(() => {
      setTime((time) => time - 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box className="text-center text-lg">
      times
      <Typography>{time}</Typography>
    </Box>
  )
}
