// libs
import React from 'react';
// layouts
import MVList from './MVList';
import styles from './styles.module.scss';

const MVs = () => (
  <div className={styles['mv-wrapper']}>
    <div className={styles['mv-inner']}>
      <MVList />
    </div>
  </div>
);

export default MVs;
