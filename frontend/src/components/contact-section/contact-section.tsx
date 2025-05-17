import styled from "styled-components";
import ContactButton from "../contact-button/contact-button";
import { Typography } from 'antd';

const { Title } = Typography;

const SectionContainer = styled.section`
  padding: 70px 40px;
  text-align: center;
`;

const StyledTitle = styled(Title)`
  margin-bottom: 48px !important;
  font-size: 48px !important;
`;

const ContactSection: React.FC = () => {
  return (
    <SectionContainer>
      <StyledTitle level={3}>Less important title</StyledTitle>
      <ContactButton />
    </SectionContainer>
  );
};

export default ContactSection;