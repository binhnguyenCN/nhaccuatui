// libs
import Link from 'next/link';
import React from 'react';
// others
import styles from './styles.module.scss';

const DropdownItem = ({ subMenu }) => (
  <li className={styles['submenu-item']}>
    <ul>
      <li className={styles['submenu-title']}>
        <Link href="/">{subMenu.title}</Link>
      </li>
      {subMenu.list.map((item) => (
        <li className={styles['submenu-content']} key={item}>
          <Link href="/">{item}</Link>
        </li>
      ))}
    </ul>
  </li>
);

export default DropdownItem;
