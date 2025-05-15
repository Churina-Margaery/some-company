import React from 'react';
import { Layout } from 'antd';

import ContactButton from '../contact-button/contact-button';
import MainLink from '../main-link/main-link';

const { Header } = Layout;

const AppHeader: React.FC = () => {
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
      <MainLink
        title="Some Company"
      />
      <ContactButton />
    </Header>
  );
};

export default AppHeader;