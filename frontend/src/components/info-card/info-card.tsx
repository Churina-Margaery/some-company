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

interface Props {
  title: string;
  description: string;
}

const InfoCard: React.FC<Props> = ({ title, description }) => {
  return (
    <>
      <CardTitle level={3}>{title}</CardTitle>
      <StyledParagraph>
        {description}
      </StyledParagraph>
    </>
  );
};

export default InfoCard;
