// libs
import React from 'react';

// layouts
import CategoryTitles from '../../../../data_source/CategoryTitle';
import CategoryList from '../../components/CategoryList';
import CategoryTitle from '../../components/CategoryTitle';
import NewReleaseItem from './NewReleaseItem';
import styles from './styles.module.scss';

const NewRelease = ({ songs }) => (
  <div className={styles['album-hot-wrapper']}>
    <div className={styles['album-hot-inner']}>
      <CategoryTitle title={CategoryTitles.newRelease} />
      <CategoryList>
        {songs.song.map((song, index) => {
          if (index < 10) return <NewReleaseItem song={song} key={song.key} />;
          return null;
        })}
      </CategoryList>
    </div>
  </div>
);

export default NewRelease;
