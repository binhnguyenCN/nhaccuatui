// libs
import Link from 'next/link';
import React from 'react';
// others
import styles from './styles.module.scss';

const TopicItem = ({ thumbURL, coverImageURL }) => (
  <li className={styles['topic-item']}>
    <Link href={thumbURL} passHref>
      <span>
        <img src={coverImageURL} width={300} height={100} alt="topic" />
      </span>
    </Link>
  </li>
);

export default TopicItem;
