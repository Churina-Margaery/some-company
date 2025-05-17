// InfoSection.tsx
import React from 'react';
import { Typography, Row, Col } from 'antd';
import styled from 'styled-components';

import ContactButton from '../contact-button/contact-button';
import InfoCard from '../info-card/info-card';
import colors from '../../../styles/colors';

const { Title } = Typography;

const SectionContainer = styled.section`
  padding: 60px 40px;
  text-align: center;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 48px !important;
  font-size: 48px !important;
  color: ${colors.pink} !important;
`;

const StyledRow = styled(Row)`
  padding: 40px 0px;
`;

const InfoSection: React.FC = () => {
  return (
    <>
      <SectionContainer>
        <StyledTitle level={2}>Also very important title</StyledTitle>
        <StyledRow gutter={[60, 32]} justify="center">
          {Array.from({ length: 6 }).map((_, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <InfoCard
                key={index}
                title={`Title ${index + 1}`}
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamc.`}
              />
            </Col>
          ))}
        </StyledRow>
        <ContactButton />
      </SectionContainer>
    </>
  );
};

export default InfoSection;