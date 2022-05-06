// libs
import React from 'react';
import CategoryList from '../../components/CategoryList';
// layouts
import styles from './styles.module.scss';

const Albums = () => (
  <div className={styles['albums-wrapper']}>
    <h1>Albums category</h1>
    <CategoryList />
  </div>
);

export default Albums;
