// libs
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import images from '../../../../../../constants/images';

import styles from './styles.module.scss';

const TopicItem = ({ topic }) => (
  <li className={styles['topic-item']}>
    <Link href={topic.thumbURL}>
      <Image
        src={topic.coverImageURL}
        width={300}
        height={100}
        blurDataURL={images.blurDataURL}
        alt="topic"
      />
    </Link>
  </li>
);

export default TopicItem;
