import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
     <title>Yes or No poll</title>
     <script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.19.1/firebase-database.js"></script>
      <Head />
      <body style={{overflowX:"hidden"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}