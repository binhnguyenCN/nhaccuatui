// libs
import Link from 'next/link';
import React from 'react';
// layouts
import HeaderAuth from './components/HeaderAuth';
import HeaderMenu from './components/HeaderMenu';
import HeaderUtils from './components/HeaderUtils';
import SearchBar from './components/SearchBar';
import SelectLang from './components/SelectLangs';
// others
import images from '@/constants/images';
import { ProvideLocale } from '@/context/LocaleContext';
import styles from './styles.module.scss';

const Header = () => (
  <ProvideLocale>
    <header className={styles['header-wrapper']}>
      <div className={styles['header-inner']}>
        <Link href="/" passHref>
          <span className={styles['header-logo']}>
            <img 
              src={images.logoIcon} 
              alt="nhaccuatui" 
              width={64} 
              height={40} 
            />
          </span>
        </Link>
        <Link href="/about" passHref>
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
        <SelectLang />
        <HeaderAuth />
      </div>
    </header>
  </ProvideLocale>
);
export default Header;
