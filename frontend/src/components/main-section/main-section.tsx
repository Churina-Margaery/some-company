import React from 'react';
import { Row, Col, Typography } from 'antd';

import YouTubeEmbed from '../youtube-embed/youtube-embed';
import styled from 'styled-components';

const { Title, Paragraph } = Typography;

const TitleStyled = styled(Title)`
  &.ant-typography {
    font-size: 60px;
    width: 70%;
  }
  @media (max-width: 768px) {
    font-size: 40px !important;
    text-align: center;
    width: 100% !important;
  }
`;

const ParagraphStyled = styled(Paragraph)`
  &.ant-typography {
    font-size: 20px !important;
    width: 70%;
    line-height: 1.4;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    width: 100% !important;
  }
`;

const MainSectionStyled = styled.section`
  margin: 0 0;
  padding: 40px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
`;

const MainSection: React.FC = () => {
  return (
    <MainSectionStyled>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12}>
          <TitleStyled level={1}>Most important title on the page</TitleStyled>
          <ParagraphStyled>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante.
          </ParagraphStyled>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12}>
          <YouTubeEmbed videoId="dQw4w9WgXcQ" title="Never Gonna Give You Up" />
        </Col>
      </Row>
    </MainSectionStyled>
  );
};

export default MainSection;