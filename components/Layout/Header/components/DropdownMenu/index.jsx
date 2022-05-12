// libs
import React from 'react';
// layouts
import DropdownItem from '../DropdownItem';
// others
import styles from './styles.module.scss';

const DropdownMenu = ({ dropdownMenu, style }) => (
  <ul className={`${styles['header-submenu']} ${style}`}>
    {dropdownMenu &&
      dropdownMenu.map((menu) => (
        <DropdownItem subMenu={menu} key={menu.title} />
      ))}
  </ul>
);
export default DropdownMenu;
