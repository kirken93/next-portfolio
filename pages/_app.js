import "../styles/styles.scss"
import Header from "@components/Header"
import Head from "next/head"

export default function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Megan Kirkbride</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"></link>
    </Head>
    <Header />
    <main>
      <Component {...pageProps} />
    </main>
  </>
}