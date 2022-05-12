// libs
import React from 'react';
// others
import styles from './styles.module.scss';

const CategoryList = ({ children }) => (
  <ul className={styles['category-list']}>{children}</ul>
);

export default CategoryList;
