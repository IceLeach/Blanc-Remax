import React from 'react';
import { Button } from 'antd';
import { history, Link, useDispatch } from 'umi';

const Base = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => {
        dispatch({ type: 'theme/setType', payload: 'R' });
        // setTimeout(() => {
        history.push({ pathname: '/dashboard' });
        // }, 1000);
      }}
    >
      C
    </Button>
  );
};

export default Base;
