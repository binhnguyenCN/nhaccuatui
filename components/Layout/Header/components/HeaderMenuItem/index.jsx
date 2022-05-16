// libs
import Link from 'next/link';
import React from 'react';
// layouts
import DropdownMenu from '../DropdownMenu';
// others
import styles from './styles.module.scss';

const HeaderMenuItem = (props) => {
  const { menuItem, title } = props;

  return (
    <li className={styles['header-item']}>
      <Link href="/">{title}</Link>
      <DropdownMenu
        dropdownMenu={menuItem.subMenu}
        style={styles['header-submenu']}
      />
    </li>
  );
};

export default HeaderMenuItem;
