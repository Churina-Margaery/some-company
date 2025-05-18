// Footer.tsx
import React from 'react';
import { Typography } from 'antd';
import styled from 'styled-components';

import colors from '../../../styles/colors';

const { Title } = Typography;

const FooterContainer = styled.footer`
  padding: 16px 40px;
  text-align: center;
  border-top: 1px solid ${colors.pink};
  background-color: ${colors.darkBlue2};
  position: sticky;
  bottom: 0;
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