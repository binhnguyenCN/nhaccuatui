import React from 'react';

import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles['header-wrapper']}>
      <h1>HEADER</h1>
      <nav />
      <div className="search">
        <i />
      </div>
    </header>
  );
}
export default Header;
