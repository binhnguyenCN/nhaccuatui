// libs
import React from 'react';
import { useLocale } from '../../../../../context/LocaleContext';
// layouts
import HeaderMenuItem from '../HeaderMenuItem';
// others
import HeaderData from '@/data_source/Header';
import styles from './styles.module.scss';

const HeaderMenu = () => {
  const { localDataSource } = useLocale();

  return (
    <ul className={styles['header-menu']}>
      {HeaderData.menuList.map((menuItem, index) => (
        <HeaderMenuItem
          menuItem={menuItem}
          key={menuItem.title}
          title={localDataSource.header.menuList[index].title}
        />
      ))}
    </ul>
  );
};
export default HeaderMenu;
