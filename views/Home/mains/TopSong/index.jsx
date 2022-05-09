// libs
import React from 'react';

// layouts
import CategoryTitles from '../../../../data_source/CategoryTitle';
import CategoryList from '../../components/CategoryList';
import CategoryTitle from '../../components/CategoryTitle';
import styles from './styles.module.scss';
import TopSongItem from './TopSongItem';

const TopSong = ({ songs }) => (
  <article className={styles['top-song-wrapper']}>
    <div className={styles['top-song-inner']}>
      <CategoryTitle title={CategoryTitles.topSong} />
      <CategoryList>
        {songs.map((song, index) => {
          if (index < 5) {
            return <TopSongItem song={song} key={song.key} />;
          }
          return null;
        })}
      </CategoryList>
    </div>
  </article>
);
export default TopSong;
