import React from 'react';

import styles from './styles.module.scss';

const Footer = (props) => {
  const { title } = props;
  return (
    <footer className={styles['footer-wrapper']}>
      <h1>{title}</h1>
    </footer>
  );
};
export default Footer;
