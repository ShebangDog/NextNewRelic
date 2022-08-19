import { Html, Main, NextScript, Head } from "next/document"

export const Document = () => {

  return (
    <Html>
      <Head>
        <script
          async
          type="text/javascript"
          src="/js/newrelic.js"
        />
        <title></title>
      </Head>
      <body>
      <Main/>
      <NextScript/>
      </body>

    </Html>
  )
}

export default Document
