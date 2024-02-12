import { isNumber } from 'lodash'
import { useState, useEffect, useRef } from 'react'

export default function useTime(remainingTime = 0) {
  const [time, setTime] = useState(remainingTime)
  const timeRef = useRef(null)

  const calcTimeValues = (currentTime) => {
    const timeValues = {
      totalSeconds: 0,
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0
    }
    if (currentTime <= 0 || !isNumber(currentTime)) return timeValues
    let remainingSeconds = currentTime
    const days = Math.floor(remainingSeconds / (24 * 60 * 60))
    remainingSeconds -= days * 24 * 60 * 60
    const hours = Math.floor(remainingSeconds / (60 * 60))
    remainingSeconds -= hours * 60 * 60
    const minutes = Math.floor(remainingSeconds / 60)
    remainingSeconds -= minutes * 60
    const seconds = remainingSeconds

    return { totalSeconds: currentTime, days, hours, minutes, seconds }
  }

  useEffect(() => {
    timeRef.current = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timeRef.current)
          return 0
        }
        return prevTime - 1
      })
    }, 1000)
    return () => {
      clearInterval(timeRef.current)
    }
  }, [])

  return calcTimeValues(time)
}
