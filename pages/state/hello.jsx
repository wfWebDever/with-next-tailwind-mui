import { useEffect, useState } from 'react'

export default function Hello({ data }) {
  const [value, setData] = useState(data)
  useEffect(() => {
    console.info(1111, value)
  })

  return <></>
}
