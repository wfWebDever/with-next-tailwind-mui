import { StyledEngineProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Layout from '../components/layout'
import '../styles/globals.scss'
import Router from 'next/router'
import nProgress from 'nprogress'
import 'nprogress/nprogress.css'

Router.events.on('routeChangeStart', nProgress.start)
Router.events.on('routeChangeError', nProgress.done)
Router.events.on('routeChangeComplete', nProgress.done)

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 900,
      lg: 1024,
      xl: 1280
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        {/* Your component tree. Now you can override MUI's styles. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </StyledEngineProvider>
    </ThemeProvider>
  )
}

export default MyApp
