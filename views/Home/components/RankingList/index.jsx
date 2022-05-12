// libs
import React from 'react';
// others
import styles from './styles.module.scss';

const RankingList = ({ children }) => (
  <ul className={styles['ranking-list']}>{children}</ul>
);
export default RankingList;
