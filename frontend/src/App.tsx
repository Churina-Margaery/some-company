import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './const/const'
import MainPage from './pages/main-page/main-page'
import ContactPage from './pages/contact-page/contact-page'
import type { FC } from 'react'

const App: FC = () => {
  return (
    <HelmetProvider>
      <BrowserRouter basename='/'>
        <Routes>
          <Route
            path={ROUTES.Root}
            element={<MainPage />}
          />
          <Route
            path={ROUTES.Contacts}
            element={<ContactPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  )
}

export default App
