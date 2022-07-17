import { StyledEngineProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import Layout from '../components/layout'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      {/* Your component tree. Now you can override MUI's styles. */}
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StyledEngineProvider>
  )
}

export default MyApp
