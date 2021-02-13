import Head from 'next/head'

import Nav from '@components/Nav'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Megan Kirkbride</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />

      <main>
        <Header text="Megan Kirkbride" />
        <img src="/painted_rocks.jpeg"
             className="painted-rocks"
             alt="Megan at the painted rocks"
             height="400" />
        <div className="about-content">
          Hello! My name is Megan Kirkbride and I'm a software
          engineer who enjoys working with React. I've been working
          as a full-stack developer at <a href="https://bloomerang.co/" target="_blank">Bloomerang</a> since 2015.
        </div>
      </main>

      <Footer />

    </div>
  )
}