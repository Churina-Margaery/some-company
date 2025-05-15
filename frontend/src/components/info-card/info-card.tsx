import { Typography } from "antd";
import styled from "styled-components";

const { Title, Paragraph } = Typography;

const CardTitle = styled(Title)`
  margin-bottom: 16px !important;
`;

const StyledParagraph = styled(Paragraph)`
  color: #666;
  margin-bottom: 24px !important;
`;
const InfoCard: React.FC = () => {
  return (
    <>
      <CardTitle level={3}>Title</CardTitle>
      <StyledParagraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum
      </StyledParagraph>
    </>
  );
};

export default InfoCard;
