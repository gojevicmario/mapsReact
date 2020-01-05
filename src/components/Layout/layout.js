import React from 'react';
import Header from '../../containers/Header/Header';

const layout = props => (
  <>
    <Header />
    <main className="container">{props.children}</main>
  </>
);

export default layout;
