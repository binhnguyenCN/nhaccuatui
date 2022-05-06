// libs
import React from 'react';

import HotTopicData from '../../../../data_source/HotTopic';
import CategoryTitle from '../../components/CategoryTitle';
import TopicList from './components/TopicList';
import styles from './styles.module.scss';

const HotTopic = ({ topics }) => (
  <div className={styles['hot-topic-wrapper']}>
    <div className={styles['hot-topic-inner']}>
      <CategoryTitle title={HotTopicData.title} />
      <TopicList topics={topics} />
    </div>
  </div>
);

export default HotTopic;
