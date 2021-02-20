import Head from "next/head";

import Nav from "@components/Nav";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Megan Kirkbride</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"></link>
      </Head>
      <Nav />

      <main>
        <Header text="Megan Kirkbride" />
        <img
          src="/painted_rocks.jpeg"
          className="painted-rocks"
          alt="Megan at the painted rocks"
          height="400"
        />
        <div className="about-content">Hello! My name is Megan Kirkbride</div>
      </main>

      <Footer />
    </div>
  );
}
