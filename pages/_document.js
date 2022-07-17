import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700&display=swap"
        />
      </Head>
      <body id="app">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
