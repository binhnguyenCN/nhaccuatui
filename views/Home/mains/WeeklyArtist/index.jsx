// libs
import React from 'react';

// layouts
import CategoryTitles from '../../../../data_source/CategoryTitle';
import CategoryList from '../../components/CategoryList';
import CategoryTitle from '../../components/CategoryTitle';
import styles from './styles.module.scss';
import WeeklyArtistItem from './WeeklyArtistItem';

const WeeklyArtist = ({ artists }) => (
  <article className={styles['weekly-artist-wrapper']}>
    <div className={styles['weekly-artist-inner']}>
      <CategoryTitle title={CategoryTitles.weeklyArtist} />
      <CategoryList>
        {artists.map((artist, index) => {
          if (index < 5) {
            return <WeeklyArtistItem artist={artist} key={artist.key} />;
          }
          return null;
        })}
      </CategoryList>
    </div>
  </article>
);
export default WeeklyArtist;
