import { Typography } from "antd";
import styled from "styled-components";

const { Title, Paragraph } = Typography;

const CardTitle = styled(Title)`
  margin-bottom: 16px !important;
`;

const StyledParagraph = styled(Paragraph)`
  color: #666;
  margin-bottom: 24px !important;
  padding: 0  40px;
`;

interface Props {
  title: string;
  description: string;
}

/**
 * InfoCard Component
 * Displays a card with a title and description.
 * @param {string} title - The title to display at the top of the card
 * @param {string} description - The descriptive text to display in the card body
 */
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
