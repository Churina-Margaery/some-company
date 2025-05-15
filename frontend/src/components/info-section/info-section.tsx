// InfoSection.tsx
import React from 'react';
import { Typography, Row, Col } from 'antd';
import styled from 'styled-components';

import ContactButton from '../contact-button/contact-button';
import InfoCard from '../info-card/info-card';

const { Title } = Typography;

const SectionContainer = styled.div`
  padding: 60px 20px;
  background-color: #fff;
  text-align: center;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 48px !important;
  font-size: 48px !important;
`;

const InfoSection: React.FC = () => {
  return (
    <>
      <SectionContainer>
        <StyledTitle level={2}>Also very important title</StyledTitle>
        <Row gutter={[32, 32]} justify="center">
          {/* Первый ряд карточек */}
          <Col xs={24} sm={12} md={8}>
            <InfoCard />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <InfoCard />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <InfoCard />
          </Col>
          {/* Второй ряд карточек */}
          <Col xs={24} sm={12} md={8}>
            <InfoCard />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <InfoCard />
          </Col>
          <Col xs={24} sm={12} md={8}>
            <InfoCard />
          </Col>
        </Row>
        <ContactButton />
      </SectionContainer>

      <SectionContainer>
        <StyledTitle level={2}>Less important title</StyledTitle>
        <ContactButton />
      </SectionContainer>
    </>
  );
};

export default InfoSection;