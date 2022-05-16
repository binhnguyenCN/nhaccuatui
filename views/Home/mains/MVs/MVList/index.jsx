// libs
import React from 'react';
// layouts
import MVItem from '../MVItem';
// others
import styles from './styles.module.scss';

const MVList = ({ MVs }) => (
  <ul className={styles['mv-list']}>
    {MVs.map((mv, index) => (
      <MVItem
        thumbnail={mv.thumbnail}
        title={mv.title}
        duration={mv.duration}
        artists={mv.artists}
        index={index}
        key={mv.key}
      />
    ))}
  </ul>
);

export default MVList;
