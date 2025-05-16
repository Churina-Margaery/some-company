import { styled } from "styled-components";
import ContactButton from "../contact-button/contact-button";
import { Typography } from 'antd';

const { Title } = Typography;

const SectionContainer = styled.div`
  padding: 70px 40px;
  background-color: #f5f5f5;
  text-align: center;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
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