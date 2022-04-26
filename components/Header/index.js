import React from 'react';

import styles from './styles.module.scss';

function Header(props) {
  const { title } = props;
  return (
    <header className={styles['header-wrapper']}>
      <h1>{title}</h1>
      <nav />
      <div className="search">
        <i />
      </div>
    </header>
  );
}
export default Header;
