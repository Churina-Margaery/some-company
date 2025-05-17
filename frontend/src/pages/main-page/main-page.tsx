import type { FC } from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'

import AppHeader from '../../components/header/header'
import MainSection from '../../components/main-section/main-section'
import InfoSection from '../../components/info-section/info-section'
import Footer from '../../components/footer/footer'
import ContactSection from '../../components/contact-section/contact-section'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  margin-bottom: auto;
`;

const MainPage: FC = () => {
  return (
    <PageWrapper>
      <Helmet>
        <title>Some Company - Home</title>
        <meta name="description" content="Welcome to Some Company" />
        <meta property="og:title" content="Some Company - Home" />
        <meta property="og:description" content="Welcome to Some Company" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <AppHeader />

      <MainContent>
        <MainSection />
        <InfoSection />
        <ContactSection />
      </MainContent>

      <Footer />
    </PageWrapper>
  )
}

export default MainPage
