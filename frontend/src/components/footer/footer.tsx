// Footer.tsx
import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;

const FooterContainer = styled.footer`
  padding: 20px 40px;
  text-align: center;
  background-color: #fff;
  border-top: 2px solid #e0e0e0;
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const CompanyTitle = styled(Title)`
  font-size: 24px !important;
  margin: 0 !important;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer role="contentinfo" aria-label="Site footer">
      <CompanyTitle level={4}>Some Company {currentYear}</CompanyTitle>
    </FooterContainer>
  );
};

export default Footer;