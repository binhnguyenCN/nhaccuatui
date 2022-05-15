// libs
import React from 'react';
// layouts
import HeaderMenuItem from '../HeaderMenuItem';
// others
import HeaderData from '@/data_source/Header';
import styles from './styles.module.scss';

const HeaderMenu = () => (
  <ul className={styles['header-menu']}>
    {HeaderData.menuList.map((menuItem) => (
      <HeaderMenuItem menuItem={menuItem} key={menuItem.title} />
    ))}
  </ul>
);
export default HeaderMenu;
