import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../const/const';

const { Title } = Typography;

interface Props {
  title: string;
}

const MainLink: React.FC<Props> = ({ title }) => {
  return (
    <Link to={ROUTES.Root}>
      <Title level={1} style={{ margin: 0, fontSize: '30px', fontWeight: 'bold' }}>
        {title}
      </Title>
    </Link>
  );
};

export default MainLink;
