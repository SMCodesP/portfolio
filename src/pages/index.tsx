import { NextPage } from 'next';
import React from 'react';

import { ContainerHome } from '@/styles/pages/home';
import Menu from '@/components/Menu';

const Home: NextPage = () => {
  return (
    <ContainerHome>
      <Menu />
    </ContainerHome>
  );
};

export default Home;
