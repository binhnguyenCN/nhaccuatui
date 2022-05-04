import { SearchOutlined } from '@ant-design/icons';
import React from 'react';

import styles from './styles.module.scss';

const SearchBar = () => (
  <div className={styles['header-search']}>
    <SearchOutlined />
    <input type="text" placeholder="Tìm kiếm" />
  </div>
);
export default SearchBar;
