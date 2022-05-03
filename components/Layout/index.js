import React from 'react';

import { Footer, Header } from '..';
import styles from './styles.module.scss';

const Layout = (props) => {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
