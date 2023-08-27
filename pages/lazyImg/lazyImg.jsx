import { useState, useEffect, useRef } from 'react'

const LazyImg = (props) => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log('Loaded new items', entry)
        if (entry.isIntersecting) {
          setInView(true)
        }
      })
    })
    if (ref?.current) {
      intersectionObserver.observe(ref.current)
    }

    return () => {
      intersectionObserver.disconnect()
    }
  }, [])

  return inView ? (
    <img {...props}></img>
  ) : (
    <div
      ref={ref}
      id={props.id}
      className="w-full h-[800px] bg-gray mb-1"
    ></div>
  )
}

export default LazyImg
