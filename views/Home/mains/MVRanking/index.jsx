// libs
import React from 'react';
// layouts
import CategoryTitles from '../../../../data_source/CategoryTitle';
import RankingOptions from '../../../../data_source/RankingOptions';
import CategoryTitle from '../../components/CategoryTitle';
import RankingList from '../../components/RankingList';
import RankingOption from '../../components/RankingOption';
import MVRankingItem from './MVRankingItem';
// others
import styles from './styles.module.scss';

const MVRanking = ({ mvs }) => (
  <div className={styles['mv-ranking-wrapper']}>
    <div className={styles['mv-ranking-inner']}>
      <CategoryTitle title={CategoryTitles.mvRanking} />
      <RankingOption options={RankingOptions.options} />
      <RankingList>
        {mvs &&
          mvs.map((mv, index) => {
            if (index < 5) {
              return <MVRankingItem mv={mv} index={index + 1} key={mv.key} />;
            }
            return null;
          })}
      </RankingList>
    </div>
  </div>
);
export default MVRanking;
