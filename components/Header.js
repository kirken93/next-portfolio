import Link from 'next/link'

export default function Nav() {
  return (
    <header>
      <div className="icon-title">
        <img src="/favicon-32x32.png" />
        <h1>Megan Kirkbride</h1>
      </div>
      <nav className="nav" role="navigation" aria-label="main navigation">
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </header>
  )
}
