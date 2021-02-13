import Nav from '@components/Nav'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ContactForm from '@components/ContactForm'

export default function Contact() {
  return (
    <div className="container">
      <Nav />
      <main>
        <Header text="Contact me" />
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}
