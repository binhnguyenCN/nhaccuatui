// libs
import React from 'react';
// layout
import CategoryTitles from '../../../../data_source/CategoryTitle';
import CategoryTitle from '../../components/CategoryTitle';
import TopicList from './components/TopicList';
import styles from './styles.module.scss';

const HotTopic = ({ topics }) => (
  <div className={styles['hot-topic-wrapper']}>
    <div className={styles['hot-topic-inner']}>
      <CategoryTitle title={CategoryTitles.hotTopic} />
      <TopicList topics={topics} />
    </div>
  </div>
);

export default HotTopic;