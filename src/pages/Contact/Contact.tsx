import ContactForm from 'src/components/ContactForm/ContactForm'
import './contact.css'

import img from 'src/assets/backgrounds/contact.webp'

export default function Contact() {
  return (
    <main className="page-container contact-page">
      <header>
        <h1>Let's keep in touch</h1>
        <img src={img} alt='Abuk playing live' />
      </header>
      <ContactForm />
    </main>
  )
}