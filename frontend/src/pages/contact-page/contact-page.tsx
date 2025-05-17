import { useEffect, type FC } from 'react'
import { Helmet } from 'react-helmet-async'
import styled from 'styled-components'

import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import { ContactForm } from '../../components/contact-form/contact-form'

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const MainContent = styled.main`
  flex: 1;
  margin-bottom: auto;
`;

const ContactPage: FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageWrapper>
      <Helmet>
        <title>Contact Us - Some Company</title>
        <meta name="description" content="Get in touch with Some Company." />
        <meta property="og:title" content="Contact Us - Some Company" />
        <meta property="og:description" content="Get in touch with Some Company." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <Header />

      <MainContent>
        <ContactForm />
      </MainContent>

      <Footer />
    </PageWrapper>
  )
}

export default ContactPage
