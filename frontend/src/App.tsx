import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './const/const'
import MainPage from './pages/main-page/main-page'
import ContactPage from './pages/contact-page/contact-page'
import type { JSX } from 'react'


function App(): JSX.Element {
  return (
    <>
      <HelmetProvider>
        <BrowserRouter basename='/'>
          {/* <BrowserRouter basename='/some-company'> */}
          < Routes >
            <Route
              path={ROUTES.Root}
              element={
                <MainPage />
              }
            />
            <Route
              path={ROUTES.Contacts}
              element={
                <ContactPage />
              }
            />
          </Routes >
        </BrowserRouter>
      </HelmetProvider>
    </>
  )
}

export default App
