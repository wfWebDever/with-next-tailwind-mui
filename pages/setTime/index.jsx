import { Box, Typography } from '@mui/material'
import useTime from './useTime'

const SetTime = () => {
  // use hook
  const { totalSeconds, days, hours, minutes, seconds } = useTime(10000)

  return (
    <Box className="text-center text-lg">
      <Box>
        <Typography component="span" className="bg-black p-1 text-white m-1">
          {days}
        </Typography>
        day:
        <Typography component="span" className="bg-black p-1 text-white m-1">
          {hours}
        </Typography>
        hours:
        <Typography component="span" className="bg-black p-1 text-white m-1">
          {minutes}
        </Typography>
        minutes:
        <Typography component="span" className="bg-black p-1 text-white m-1">
          {seconds}
        </Typography>{' '}
        seconds
      </Box>
      <Typography component="span" className="p-1">
        ALL:
      </Typography>
      <Typography component="span" className="bg-black p-1 text-white m-1">
        {totalSeconds}S
      </Typography>
    </Box>
  )
}

export default SetTime
