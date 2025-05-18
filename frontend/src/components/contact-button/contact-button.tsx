import { Button } from "antd";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { ROUTES } from '../../const/const';
import colors from '../../../styles/colors';

const ContactButtonStyled = styled(Button)`
  background: ${colors.pink} !important;
  color: ${colors.white} !important;
  border: none !important;
  padding: 14px 32px !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  border-radius: 12px !important;
  cursor: pointer !important;
  transition: background 0.3s ease;

  @media (max-width: 768px) {
    font-size: 16px !important;
    padding: 0 24px !important;
  }

  &:hover,
  &:focus {
    transform: scale(1.07);
    background: ${colors.pink} !important;
    color: ${colors.white} !important;
    border: none !important;
    transition: all 0.3s ease !important;
  };
`;

/**
 * ContactButton Component
 * A styled button component that links to the contact page.
 */
const ContactButton: React.FC = () => {
  return (
    <Link to={ROUTES.Contacts}>
      <ContactButtonStyled>
        Contact Us
      </ContactButtonStyled>
    </Link>
  );
};

export default ContactButton;
