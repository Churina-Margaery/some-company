import React from 'react';
import { Layout } from 'antd';

import ContactButton from '../contact-button/contact-button';
import MainLink from '../main-link/main-link';
import styled from 'styled-components';
import colors from '../../../styles/colors';

const { Header } = Layout;

const HeaderStyled = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.darkBlue};
  padding: 20px 50px;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  border-bottom: 1px solid ${colors.pink};
  
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`;

/**
 * AppHeader Component
 * Renders the main header of the application with navigation link and contact button.
 */
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