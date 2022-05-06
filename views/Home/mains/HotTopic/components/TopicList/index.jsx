// libs
import React from 'react';
// layouts
import TopicItem from '../TopicItem';
import styles from './styles.module.scss';

const TopicList = ({ topics }) => (
  <ul className={styles['topic-list']}>
    {topics.map((topic) => (
      <TopicItem topic={topic} key={topic.key} />
    ))}
  </ul>
);

export default TopicList;
