import React from 'react';
import { Card, Button } from 'antd';
import styled from 'styled-components';
import type { FC } from 'react';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  background: #fff;
  padding: 40px 20px;
  
  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin: 0 0 24px;
  font-family: 'Roboto', sans-serif !important;
  color: rgba(0, 0, 0, 0.85);
  
  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0 0 20px;
  }
`;

const StyledButton = styled(Button)`
  min-width: 200px;
  height: 48px;
  font-size: 18px;
  
  @media (max-width: 768px) {
    min-width: 160px;
    height: 44px;
    font-size: 16px;
  }
`;

interface Props {
  response: string;
}

const Message: FC<Props> = ({ response }) => {
  return (
    <StyledCard role="status" aria-live="polite">
      <Title>{response}</Title>
      <Link to="/">
        <StyledButton type="primary" size="large">
          Return to Home
        </StyledButton>
      </Link>
    </StyledCard>
  );
};

export default Message;