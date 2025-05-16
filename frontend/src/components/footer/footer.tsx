// Footer.tsx
import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const FooterContainer = styled.footer`
  padding: 40px 40px;
  text-align: center;
  background-color: #fff;
  margin-top: 60px;
  margin-bottom: 60px;
`;

const CompanyTitle = styled(Title)`
  font-size: 24px !important;
  margin: 0 !important;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <CompanyTitle level={4}>Some Company 2025</CompanyTitle>
    </FooterContainer>
  );
};

export default Footer;