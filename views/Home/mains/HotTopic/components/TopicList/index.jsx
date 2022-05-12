// libs
import React from 'react';
// layouts
import TopicItem from '../TopicItem';
// others
import styles from './styles.module.scss';

const TopicList = ({ topics }) => (
  <ul className={styles['topic-list']}>
    {topics.map((topic, index) => {
      if (index < 5) {
        return <TopicItem topic={topic} key={topic.key} />;
      }
      return null;
    })}
  </ul>
);

export default TopicList;
