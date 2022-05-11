// libs
import React from 'react';
// layouts
import HeaderData from '../../../../../data_source/Header';
import HeaderMenuItem from '../HeaderMenuItem';
import styles from './styles.module.scss';

const HeaderMenu = () => (
  <ul className={styles['header-menu']}>
    {HeaderData.menuList.map((menuItem) => (
      <HeaderMenuItem menuItem={menuItem} key={menuItem.title} />
    ))}
  </ul>
);
export default HeaderMenu;
