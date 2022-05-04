import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import images from '../../constants/images';
import HeaderAuth from './components/HeaderAuth';
import HeaderMenu from './components/HeaderMenu';
import HeaderUtils from './components/HeaderUtils';
import SearchBar from './components/SearchBar';
import styles from './styles.module.scss';

const Header = () => (
  <header className={styles['header-wrapper']}>
    <Link href="/" className={styles['header-logo']}>
      <Image src={images.logoIcon} alt="nhaccuatui" width={64} height={40} />
    </Link>
    <Link href="/" className={styles['header-beta-version']}>
      <Image src={images.newVersion} alt="nhaccuatui" width={96} height={37} />
    </Link>
    <HeaderMenu />
    <SearchBar />
    <HeaderUtils />
    <HeaderAuth />
  </header>
);
export default Header;
