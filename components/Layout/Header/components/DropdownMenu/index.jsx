import React from 'react';

import DropdownItem from '../DropdownItem';
import styles from './styles.module.scss';

const DropdownMenu = (props) => {
  const { dropdownMenu, style } = props;
  return (
    <ul className={`${styles['header-submenu']} ${style}`}>
      {dropdownMenu &&
        dropdownMenu.map((menu) => (
          <DropdownItem subMenu={menu} key={menu.title} />
        ))}
    </ul>
  );
};
export default DropdownMenu;
