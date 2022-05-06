// libs
import React from 'react';
// layouts
import styles from './styles.module.scss';

const CategoryList = () => (
  <ul className={styles['category-list']}>
    <li className={styles['category-item']}>Category item</li>
    <li className={styles['category-item']}>Category item</li>
    <li className={styles['category-item']}>Category item</li>
    <li className={styles['category-item']}>Category item</li>
    <li className={styles['category-item']}>Category item</li>
  </ul>
);

export default CategoryList;
