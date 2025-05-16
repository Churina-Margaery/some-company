import React from 'react';
import { Card } from 'antd';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  width: 100%;
  max-width: 600px;
  margin: 50px auto;
  text-align: center;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin: 0;
  font-family: 'Times New Roman', Times, serif !important;
`;

interface Props {
  response: string;
}

const Message: React.FC<Props> = ({ response }) => {
  return (
    <StyledCard>
      <Title>{response}</Title>
    </StyledCard>
  );
};

export default Message;