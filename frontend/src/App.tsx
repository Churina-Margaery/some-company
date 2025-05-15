import { useState, type JSX } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ROUTES } from './const/const'
import MainPage from './pages/main-page/main-page'
import ContactPage from './pages/contact-page/contact-page'
function App(): JSX.Element {
  return (
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
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
