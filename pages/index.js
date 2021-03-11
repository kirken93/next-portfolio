import Card from "@components/Card";

export default function Home() {
  return (
    <Card>
      <h2>Welcome!</h2>
      <img
        src="/painted_rocks.jpeg"
        className="painted-rocks"
        alt="Megan at the painted rocks"
        height="400"
      />
      <div className="about-content">
        Hello! My name is Megan Kirkbride and I'm a software engineer.
      </div>
    </Card>
  );
}
