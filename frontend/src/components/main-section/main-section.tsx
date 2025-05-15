import React from 'react';
import { Row, Col, Typography } from 'antd';
// import YouTubeEmbed from '../youtube-embed/youtube-embed'; // Импортируйте ваш готовый компонент

const { Title, Paragraph } = Typography;

const MainSection: React.FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Row gutter={16}>
        <Col span={12}>
          <Title level={1}>Most important title on the page</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus, vel suscipit nibh lacus tincidunt ante.
          </Paragraph>
        </Col>
        <Col span={12}>
          {/* <YouTubeEmbed videoId="YOUR_VIDEO_ID" title="YouTube video" /> */}
        </Col>
      </Row>
    </div>
  );
};

export default MainSection;