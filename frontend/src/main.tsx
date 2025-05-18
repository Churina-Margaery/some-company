import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createGlobalStyle } from 'styled-components'
import colors from '../styles/colors.ts';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${colors.darkBlue};
    background: linear-gradient(135deg, ${colors.darkBlue}, ${colors.darkBlue2});
    color: ${colors.white};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: ${colors.white};
  }

  /* Ant Design component styles */
  .ant-input, 
  .ant-btn, 
  .ant-typography,
  .ant-menu,
  .ant-form-item-label > label {
    font-family: 'Roboto', sans-serif;
    color: ${colors.white} !important;
  }
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
