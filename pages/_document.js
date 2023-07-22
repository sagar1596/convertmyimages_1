/* eslint-disable react/no-unknown-property */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5285461307145754" crossorigin="anonymous"></script>
    </Head>
      <body>
        <Main />
        <NextScript />
        <div className='mask'></div>
        <div className='loader_elem'></div>
      </body>
    </Html>
  )
}