import React from 'react';

import Footer from '../Footer';
import Header from '../Header';
import styles from './styles.module.scss';

function Layout(props) {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;
