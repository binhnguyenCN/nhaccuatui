// libs
import React from 'react';
// layouts
import CategoryList from '../../components/CategoryList';
import CategoryTitle from '../../components/CategoryTitle';
import TopSongItem from './TopSongItem';
// others
import styles from './styles.module.scss';
import CategoryTitles from '@/data_source/CategoryTitle';

const TopSong = ({ songs }) => (
  <article className={styles['top-song-wrapper']}>
    <div className={styles['top-song-inner']}>
      <CategoryTitle title={CategoryTitles.topSong} />
      <CategoryList>
        {songs.map((song, index) => {
          if (index < 5) {
            return (
              <TopSongItem
                title={song.title}
                thumbnail={song.thumbnail}
                key={song.key}
              />
            );
          }
          return null;
        })}
      </CategoryList>
    </div>
  </article>
);
export default TopSong;
