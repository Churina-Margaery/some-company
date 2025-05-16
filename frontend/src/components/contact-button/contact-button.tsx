import { Button } from "antd";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { ROUTES } from '../../const/const';

const ContactButtonStyled = styled(Button)`
  border-radius: 10px;
  height: 40px;
  padding: 0 58px;
  font-size: 18px;
  color: #fff;
  background-color: #2c2c2c;

  @media (max-width: 768px) {
    font-size: 16px !important;
    padding: 0 24px !important;
  }

  &:hover {
  border-radius: 10px;
  height: 40px;
  padding: 0 58px;
  font-size: 18px;
  color: #fff;
  background-color: #2c2c2c;

  &:hover,
  &:focus {
    background-color: #4a4a4a !important;
    transform: scale(1.07);
    background-image: linear-gradient(45deg,#394869,#A79EB4) !important;
    color: #fff !important;
    border: none !important;
    transition: all 0.3s ease;
  };

`;

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
