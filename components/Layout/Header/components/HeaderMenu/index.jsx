import { DashOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
import DropdownMenu from '../DropdownMenu';

import styles from './styles.module.scss';

const HeaderMenu = () => (
  <ul className={styles['header-menu']}>
    <li className={styles['header-item']}>
      <Link href="/">Bài hát</Link>
      <DropdownMenu />
    </li>
    <li className={styles['header-item']}>
      <Link href="/">Playlist</Link>
    </li>
    <li className={styles['header-item']}>
      <Link href="/">Tuyển tập</Link>
    </li>
    <li className={styles['header-item']}>
      <Link href="/">Video</Link>
    </li>
    <li className={styles['header-item']}>
      <Link href="/">BXH</Link>
    </li>
    <li className={styles['header-item']}>
      <Link href="/">Chủ đề</Link>
    </li>
    <li className={styles['header-item']}>
      <Link href="/">Top 100</Link>
    </li>
    <li className={styles['header-item']}>
      <Link href="/">
        <DashOutlined />
      </Link>
    </li>
  </ul>
);
export default HeaderMenu;
