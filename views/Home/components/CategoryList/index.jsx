// libs
import React from 'react';
// layouts
import styles from './styles.module.scss';

const CategoryList = ({ children }) => (
  <ul className={styles['category-list']}>{children}</ul>
);

export default CategoryList;
