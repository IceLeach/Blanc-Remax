import React from 'react';
import { Button } from 'antd';
import { history } from 'umi';

const HomePage: React.FC = () => {

  return (
    <Button onClick={() => {
      history.push({ pathname: '/base' });
    }}>进入</Button>
  );
}
export default HomePage;