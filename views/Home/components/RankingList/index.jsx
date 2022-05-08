// libs
import React from 'react';
// layouts
import styles from './styles.module.scss';

const RankingList = ({ children }) => (
  <ul className={styles['ranking-list']}>{children}</ul>
);
export default RankingList;
