// libs
import Link from 'next/link';
import React from 'react';
// layouts
import HeaderAuth from './components/HeaderAuth';
import HeaderMenu from './components/HeaderMenu';
import HeaderUtils from './components/HeaderUtils';
import SearchBar from './components/SearchBar';
// others
import images from '../../../constants/images';
import styles from './styles.module.scss';
import SelectLang from './components/SelectLangs';

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
    <div className={styles['header-inner']}>
      <SelectLang />
    </div>
  </header>
);
export default Header;
