// Footer.tsx
import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const FooterContainer = styled.footer`
  padding: 40px 20px;
  text-align: center;
  background-color: #fff;
  margin-top: 60px;
`;

const CompanyTitle = styled(Title)`
  font-size: 24px !important;
  margin: 0 !important;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <CompanyTitle level={4}>Some Company 2024</CompanyTitle>
    </FooterContainer>
  );
};

export default Footer;