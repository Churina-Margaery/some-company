import React from 'react';
import { Layout, Typography, Button } from 'antd';

const { Header } = Layout;
const { Title } = Typography;

const AppHeader: React.FC = () => {
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#fff' }}>
      <Title level={1} style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>
        Some Company
      </Title>
      <Button type="primary" style={{ borderRadius: '4px' }}>
        Contact us
      </Button>
    </Header>
  );
};

export default AppHeader;