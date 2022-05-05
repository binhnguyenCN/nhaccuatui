// libs
import React from 'react';
// layout
import Footer from './Footer';
import Header from './Header';
import styles from './styles.module.scss';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
    <Footer />
  </div>
);
export default Layout;
