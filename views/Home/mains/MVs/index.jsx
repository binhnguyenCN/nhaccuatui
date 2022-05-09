// libs
import React from 'react';

// layouts
import CategoryTitles from '../../../../data_source/CategoryTitle';
import CategoryTitle from '../../components/CategoryTitle';
import MVList from './MVList';
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
