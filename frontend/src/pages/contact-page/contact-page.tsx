import { type JSX } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { ContactForm } from '../../components/contact-form/contact-form'
export default function ContactPage(): JSX.Element {
  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
    </>
  )
}
