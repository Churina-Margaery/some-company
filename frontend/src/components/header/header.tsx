import React from 'react';
import { Layout } from 'antd';

import ContactButton from '../contact-button/contact-button';
import MainLink from '../main-link/main-link';
import { styled } from 'styled-components';

const { Header } = Layout;

const HeaderStyled = styled(Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 20px 50px;
  border-bottom: 1px solid #e0e0e0;
`;

const AppHeader: React.FC = () => {
  return (
    <HeaderStyled>
      <MainLink
        title="Some Company"
      />
      <ContactButton />
    </HeaderStyled>
  );
};

export default AppHeader;