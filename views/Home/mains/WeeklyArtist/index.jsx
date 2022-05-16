// libs
import React from 'react';
// layouts
import CategoryList from '../../components/CategoryList';
import CategoryTitle from '../../components/CategoryTitle';
import WeeklyArtistItem from './WeeklyArtistItem';
// others
import styles from './styles.module.scss';
import CategoryTitles from '@/data_source/CategoryTitle';

const WeeklyArtist = ({ artists }) => (
  <article className={styles['weekly-artist-wrapper']}>
    <div className={styles['weekly-artist-inner']}>
      <CategoryTitle title={CategoryTitles.weeklyArtist} />
      <CategoryList>
        {artists.map((artist, index) => {
          if (index < 5) {
            return (
              <WeeklyArtistItem
                title={artist.title}
                thumbnail={artist.thumbnail}
                key={artist.key}
              />
            );
          }
          return null;
        })}
      </CategoryList>
    </div>
  </article>
);
export default WeeklyArtist;
