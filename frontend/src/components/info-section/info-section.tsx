// InfoSection.tsx
import React from 'react';
import { Typography, Row, Col } from 'antd';
import styled from 'styled-components';

import ContactButton from '../contact-button/contact-button';
import InfoCard from '../info-card/info-card';

const { Title } = Typography;

const SectionContainer = styled.section`
  padding: 60px 40px;
  background-color: #fff;
  text-align: center;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 48px !important;
  font-size: 48px !important;
`;

const StyledRow = styled(Row)`
  padding: 40px 0px;
`;

const InfoSection: React.FC = () => {
  return (
    <>
      <SectionContainer>
        <StyledTitle level={2}>Also very important title</StyledTitle>
        <StyledRow gutter={[32, 32]} justify="center">
          {Array.from({ length: 6 }).map((_, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <InfoCard
                key={index}
                title={`Title ${index + 1}`}
                description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum`}
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