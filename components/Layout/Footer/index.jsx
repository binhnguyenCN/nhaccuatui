// libs
import classnames from 'classnames';
import React from 'react';
// layout
import FooterData from '../../../data_source/Footer';
import FooterContact from './components/FooterContact';
import FooterCopyright from './components/FooterCopyright';
// others
import styles from './styles.module.scss';

const Footer = () => (
  <footer className={classnames(styles['footer-wrapper'])}>
    <div className={classnames(styles['footer-inner'])}>
      <FooterContact contactInfo={FooterData.contact} />
      <FooterCopyright copyright={FooterData.copyright} />
    </div>
  </footer>
);
export default Footer;
