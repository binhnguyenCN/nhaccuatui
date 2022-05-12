// libs
import React from 'react';

// layouts
import CategoryTitles from '../../../../data_source/CategoryTitle';
import RankingOptions from '../../../../data_source/RankingOptions';
import CategoryTitle from '../../components/CategoryTitle';
import RankingList from '../../components/RankingList';
import RankingOption from '../../components/RankingOption';
import SongRankingItem from './SongRankingItem';

// others
import styles from './styles.module.scss';

const SongRanking = ({ songs }) => (
  <div className={styles['song-ranking-wrapper']}>
    <div className={styles['song-ranking-inner']}>
      <CategoryTitle title={CategoryTitles.songRanking} />
      <RankingOption options={RankingOptions.options} />
      <RankingList>
        {songs &&
          songs.map((song, index) => (
            <SongRankingItem song={song} index={index + 1} key={song.songKey} />
          ))}
      </RankingList>
    </div>
  </div>
);
export default SongRanking;
