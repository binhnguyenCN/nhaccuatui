import React from 'react';
import SongItem from '../SongItem';

import styles from './styles.modules.scss';

const SongList = () => (
  <ul className={styles['song-list']}>
    <SongItem />
  </ul>
);

export default SongList;
