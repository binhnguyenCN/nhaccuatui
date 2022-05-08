// libs
import React from 'react';

// layouts
import CategoryTitles from '../../../../data_source/CategoryTitle';
import RankingOptions from '../../../../data_source/RankingOptions';
import CategoryTitle from '../../components/CategoryTitle';
import RankingList from '../../components/RankingList';
import RankingOption from '../../components/RankingOption';
import styles from './styles.module.scss';

const SongRanking = ({ songs }) => (
  <div className={styles['song-ranking-wrapper']}>
    <div className={styles['song-ranking-inner']}>
      <CategoryTitle title={CategoryTitles.songRanking} />
      <RankingOption options={RankingOptions.options} />
      <RankingList />
    </div>
  </div>
);
export default SongRanking;
