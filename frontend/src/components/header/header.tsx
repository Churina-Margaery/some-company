import React from 'react';
import { Layout } from 'antd';

import ContactButton from '../contact-button/contact-button';
import MainLink from '../main-link/main-link';
import styled from 'styled-components';

const { Header } = Layout;

const HeaderStyled = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px 50px;
  border-bottom: 1px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

const AppHeader: React.FC = () => {
  return (
    <HeaderStyled role="banner" aria-label="Site header">
      <MainLink
        title="Some Company"
      />
      <ContactButton />
    </HeaderStyled>
  );
};

export default AppHeader;