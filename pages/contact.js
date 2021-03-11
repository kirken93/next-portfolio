import ContactForm from '@components/ContactForm'
import Card from '@components/Card'

export default function Contact() {
  return (
    <div className="container">
      <h1>Contact me</h1>
      <Card>
        <ContactForm />
      </Card>
      <Card>
        <a href="https://www.linkedin.com/in/megankirkbride/" target="_blank">
          LinkedIn
        </a>
        <a href="https://github.com/kirken93" target="_blank">
          GitHub
        </a>
        <a href="mailto:megan@megankirkbride.com">
          Email Me
        </a>
      </Card>
    </div>
  )
}
