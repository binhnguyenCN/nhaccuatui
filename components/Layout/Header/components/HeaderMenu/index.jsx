import { DashOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
import DropdownMenu from '../DropdownMenu';
import HeaderData from '../../../../../data_source/Header';
import styles from './styles.module.scss';
import HeaderMenuItem from '../HeaderMenuItem';

const HeaderMenu = () => (
  <ul className={styles['header-menu']}>
    {HeaderData.menuList.map((menuItem) => (
      <HeaderMenuItem menuItem={menuItem} key={menuItem.title} />
    ))}
    <li className={styles['header-item']}>
      <Link href="/">
        <DashOutlined />
      </Link>
    </li>
  </ul>
);
export default HeaderMenu;
