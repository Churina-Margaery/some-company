import { type JSX } from 'react'

import AppHeader from '../../components/header/header'
import MainSection from '../../components/main-section/main-section'
import InfoSection from '../../components/info-section/info-section'
import Footer from '../../components/footer/footer'
import ContactSection from '../../components/contact-section/contact-section'

export default function MainPage(): JSX.Element {
  return (
    <div>
      <AppHeader />
      <MainSection />
      <InfoSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
