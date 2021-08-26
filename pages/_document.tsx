import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/*<link rel="preload" as="font" href="https://fonts.googleapis.com"/>*/}
          {/*<link rel="preconnect" as="font" href="https://fonts.gstatic.com" crossOrigin=""/>*/}
          {/*<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap" />*/}
          <style dangerouslySetInnerHTML={{
            __html: '@import url(\'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&display=swap\');'
          }}>
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument