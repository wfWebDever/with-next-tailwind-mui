import LazyImg from './lazyImg'

const LazyImgCom = () => {
  const imgs = [
    {
      id: 1,
      name: 1,
      src: 'https://cdn.pixabay.com/photo/2022/06/25/23/41/ladybug-7284337_1280.jpg',
      alt: '1'
    },
    {
      id: 2,
      name: 2,
      src: 'https://cdn.pixabay.com/photo/2013/08/20/15/47/poppies-174276_1280.jpg',
      alt: '2'
    },
    {
      id: 3,
      name: 3,
      src: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg',
      alt: '3'
    },
    {
      id: 4,
      name: 5,
      src: 'https://cdn.pixabay.com/photo/2022/07/12/17/12/dog-7317820_1280.jpg',
      alt: '4'
    }
  ]
  return (
    <div>
      {imgs.map((props) => {
        return <LazyImg key={props.id} {...props}></LazyImg>
      })}
    </div>
  )
}

export default LazyImgCom
