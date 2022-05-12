// libs
import React from 'react';
// layouts
import Footer from './Footer';
import Header from './Header';
import CompanyInfo from './CompanyInfo';
// others
import styles from './styles.module.scss';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <Header />
    {children}
    <CompanyInfo />
    <Footer />
  </div>
);
export default Layout;
