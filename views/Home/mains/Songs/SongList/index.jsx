// libs
import React from 'react';
// layouts
import SongItem from '../SongItem';
// others
import styles from './styles.module.scss';

const SongList = ({ songList }) => (
  <ul className={styles['song-list']}>
    {songList.map((song) => (
      <SongItem song={song} key={song.key} />
    ))}
  </ul>
);

export default SongList;
