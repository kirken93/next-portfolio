import Card from '@components/Card'

export default function Home() {
  return (
    <div className="surface">
      <h2>Welcome!</h2>
      <img src="/painted_rocks.jpeg"
          className="painted-rocks"
          alt="Megan at the painted rocks"
          height="400" />
      <div className="about-content">
        Hello! My name is Megan Kirkbride and I'm a software
        engineer who enjoys working with React. I've been working
        as a full-stack developer at <a href="https://bloomerang.co/" target="_blank">Bloomerang</a> since 2015.
      </div>
    </div>
  )
}