import React from 'react';

import Header from '../Header';
import Aside from '../Aside';
/*import Grid from '../Grid'; */

import { Main } from './style'

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Aside></Aside>
      </Main>
    </>
  );
}


