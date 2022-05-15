// libs
import React from 'react';
// layouts
import CategoryTitle from '../../components/CategoryTitle';
import MVList from './MVList';
// others
import CategoryTitles from '@/data_source/CategoryTitle';
import styles from './styles.module.scss';

const MVs = ({ videoList }) => (
  <div className={styles['mv-wrapper']}>
    <div className={styles['mv-inner']}>
      <CategoryTitle title={CategoryTitles.mvs} />
      <MVList MVs={videoList} />
    </div>
  </div>
);

export default MVs;
