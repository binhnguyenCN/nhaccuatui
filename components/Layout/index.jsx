// libs
import React from 'react';
// layouts
import Footer from './Footer';
import Header from './Header';
import CompanyInfo from './CompanyInfo';
// others
import styles from './styles.module.scss';
import { ProvideLocale } from '../../context/LocaleContext';

const Layout = ({ children }) => (
  <div className={styles.container}>
    <ProvideLocale>
      <Header />
      {children}
      <CompanyInfo />
      <Footer />
    </ProvideLocale>
  </div>
);
export default Layout;
