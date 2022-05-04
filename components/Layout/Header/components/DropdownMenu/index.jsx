import Link from 'next/link';
import React from 'react';

import styles from './styles.module.scss';

const DropdownMenu = () => (
  <ul className={styles['header-submenu']}>
    <li className={styles['submenu-item']}>
      <ul>
        <li className={styles['submenu-title']}>
          <Link href="/">VIỆT NAM</Link>
        </li>
        <li>
          <Link href="/">Nhạc trẻ</Link>
        </li>
        <li>
          <Link href="/">Trữ tình</Link>
        </li>
        <li>
          <Link href="/">Rap Việt</Link>
        </li>
        <li>
          <Link href="/">Nhạc Trịnh</Link>
        </li>
      </ul>
    </li>
    <li className={styles['submenu-item']}>
      <ul>
        <li className={styles['submenu-title']}>
          <Link href="/">VIỆT NAM</Link>
        </li>
        <li>
          <Link href="/">Nhạc trẻ</Link>
        </li>
        <li>
          <Link href="/">Trữ tình</Link>
        </li>
        <li>
          <Link href="/">Rap Việt</Link>
        </li>
        <li>
          <Link href="/">Nhạc Trịnh</Link>
        </li>
      </ul>
    </li>
    <li className={styles['submenu-item']}>
      <ul>
        <li className={styles['submenu-title']}>
          <Link href="/">VIỆT NAM</Link>
        </li>
        <li>
          <Link href="/">Nhạc trẻ</Link>
        </li>
        <li>
          <Link href="/">Trữ tình</Link>
        </li>
        <li>
          <Link href="/">Rap Việt</Link>
        </li>
        <li>
          <Link href="/">Nhạc Trịnh</Link>
        </li>
      </ul>
    </li>
    <li className={styles['submenu-item']}>
      <ul>
        <li className={styles['submenu-title']}>
          <Link href="/">VIỆT NAM</Link>
        </li>
        <li>
          <Link href="/">Nhạc trẻ</Link>
        </li>
        <li>
          <Link href="/">Trữ tình</Link>
        </li>
        <li>
          <Link href="/">Rap Việt</Link>
        </li>
        <li>
          <Link href="/">Nhạc Trịnh</Link>
        </li>
      </ul>
    </li>
  </ul>
);
export default DropdownMenu;
