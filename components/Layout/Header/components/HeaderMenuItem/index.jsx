// libs
import Link from 'next/link';
import React from 'react';
// layouts
import DropdownMenu from '../DropdownMenu';
// others
import styles from './styles.module.scss';

const HeaderMenuItem = (props) => {
  const { menuItem } = props;
  return (
    <li className={styles['header-item']}>
      <Link href="/">{menuItem.title}</Link>
      <DropdownMenu
        dropdownMenu={menuItem.subMenu}
        style={styles['header-submenu']}
      />
    </li>
  );
};

export default HeaderMenuItem;
