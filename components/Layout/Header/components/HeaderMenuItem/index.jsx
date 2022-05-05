import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';
import DropdownMenu from '../DropdownMenu';

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
