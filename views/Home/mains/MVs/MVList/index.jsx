// libs
import React from 'react';
import MVItem from '../MVItem';

// layouts
import styles from './styles.module.scss';

const MVList = ({ MVs }) => (
  <ul className={styles['mv-list']}>
    {MVs.map((mv, index) => (
      <MVItem mv={mv} index={index} key={mv.key} />
    ))}
  </ul>
);

export default MVList;
