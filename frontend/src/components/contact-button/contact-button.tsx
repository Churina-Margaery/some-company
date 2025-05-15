import { Button } from "antd";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import { ROUTES } from '../../const/const';

const ContactButtonStyled = styled(Button)`
  border-radius: 8px;
  height: 48px;
  padding: 0 32px;
  font-size: 16px;
  color: #fff;
  background-color: #2c2c2c;
  margin-top: 32px;

  &:hover {
    background-color: #444 !important;
  }
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
