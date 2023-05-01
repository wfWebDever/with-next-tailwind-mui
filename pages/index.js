import Head from 'next/head'
import Image from 'next/image'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import styles from '../styles/Home.module.css'
import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import Ske from '../components/ske'
import { onLCP, onFID, onCLS } from 'web-vitals'

const img =
  'https://cdn.pixabay.com/photo/2022/06/25/23/41/ladybug-7284337_1280.jpg'

export default function Home({ data }) {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    if (data) {
      setLoading(false)
    }
  }, [data])
  console.info(data)

  useEffect(() => {
    onCLS(console.log)
    onFID(console.log)
    onLCP(console.log)
  }, [])

  if (loading) {
    return <Ske></Ske>
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack spacing={2} direction="row">
        <Button variant="text" className="text-red">
          Text
        </Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <Typography
        variant="body1"
        gutterBottom
        className="text-red mt-4 text-[26px] px-2 py-4 border-[1px] rounded-[10px] font-medium font-edusa"
      >
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Box className="w-[200px] h-[200px] relative">
        <Image
          src={img}
          alt="img"
          width={150}
          height={150}
          // layout="fill"
          objectFit="fill"
        ></Image>
      </Box>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.jsx</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getServerSideProps() {
  const data = { a: 1 }
  return {
    props: {
      data
    } // will be passed to the page component as props
  }
}
