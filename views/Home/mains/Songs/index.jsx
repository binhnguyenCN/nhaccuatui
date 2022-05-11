// libs
import React from 'react';
// layouts
import CategoryTitles from '../../../../data_source/CategoryTitle';
import CategoryTitle from '../../components/CategoryTitle';
import SongList from './SongList';
import styles from './styles.module.scss';

const Songs = ({ songs }) => (
  <div className={styles['songs-wrapper']}>
    <div className={styles['song-inner']}>
      <CategoryTitle title={CategoryTitles.songs} />
      <SongList songList={songs} />
    </div>
  </div>
);

export default Songs;
