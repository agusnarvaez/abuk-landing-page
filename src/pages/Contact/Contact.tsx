import './contact.css'

import HelmetData from 'src/components/HelmetData'
import ContactForm from 'src/components/ContactForm/ContactForm'

import img from 'src/assets/backgrounds/contact.webp'


export default function Contact() {
  const metaData ={
    title: "Let's keep in touch and create amazing things together",
    description: "Contact Abuk for bookings, music production, mixing, mastering, and more. Let's create amazing things together and change the world with music.",
    keywords: "Abuk, contact, music, production, electronic, sound design, mixdown, arrangement, business",
    canonical: "https://abuk.com/contact"
  }
  return (
    <main className="page-container contact-page">
      <HelmetData metaData={metaData}/>
      <header>
        <h1>Let's keep in touch</h1>
        <img src={img} alt='Abuk playing live' title='Abuk playing live' />
      </header>
      <ContactForm />
    </main>
  )
}