import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../const/const';
import styled from 'styled-components';

const { Title } = Typography;

interface Props {
  title: string;
}

const TitleStyled = styled(Title)`
  font-size: 30px;
  font-weight: bold;
  margin: 0 !important;
  @media (max-width: 768px) {
    font-size: 24px !important;
  }
`;

const MainLink: React.FC<Props> = ({ title }) => {
  return (
    <Link to={ROUTES.Root}>
      <TitleStyled level={1}>
        {title}
      </TitleStyled>
    </Link>
  );
};

export default MainLink;
