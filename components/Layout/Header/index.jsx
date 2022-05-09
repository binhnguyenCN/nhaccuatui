// libs
import Link from 'next/link';
import React from 'react';
// layouts
import images from '../../../constants/images';
import HeaderAuth from './components/HeaderAuth';
import HeaderMenu from './components/HeaderMenu';
import HeaderUtils from './components/HeaderUtils';
import SearchBar from './components/SearchBar';
import styles from './styles.module.scss';

const Header = () => (
  <header className={styles['header-wrapper']}>
    <div className={styles['header-inner']}>
      <Link href="/">
        <span className={styles['header-logo']}>
          <img src={images.logoIcon} alt="nhaccuatui" width={64} height={40} />
        </span>
      </Link>
      <Link href="/">
        <span className={styles['header-beta-version']}>
          <img
            src={images.newVersion}
            alt="nhaccuatui"
            width={96}
            height={37}
          />
        </span>
      </Link>
      <HeaderMenu />
      <SearchBar />
      <HeaderUtils />
      <HeaderAuth />
    </div>
  </header>
);
export default Header;