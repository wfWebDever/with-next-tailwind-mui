import { Box, Typography } from '@mui/material'
import useTime from './useTime'

export default function SetTime() {
  // use hook
  const { totalSeconds, days, hours, minutes, seconds } = useTime(10000)

  return (
    <Box className="text-center text-lg">
      {days} day:
      {hours} hours:
      {minutes} minutes:
      {seconds} seconds
      <Box>Total:</Box>
      <Typography>{totalSeconds}</Typography>
    </Box>
  )
}
