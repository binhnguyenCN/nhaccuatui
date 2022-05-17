// libs
import React from 'react';
// layouts
import SongItem from '../SongItem';
// others
import styles from './styles.module.scss';

const SongList = ({ songList }) => (
  <ul className={styles['song-list']}>
    {songList.map((song) => (
      <SongItem
        thumbnail={song.thumbnail}
        title={song.title}
        artists={song.artists}
        duration={song.duration}
        key={song.key}
      />
    ))}
  </ul>
);

export default SongList;
