// libs
import Link from 'next/link';
import React from 'react';
// others
import styles from './styles.module.scss';

const AlbumItem = ({ title, thumbnail }) => (
  <li className={styles['album-item']}>
    <Link href={thumbnail} passHref>
      <span>
        <img
          src={thumbnail}
          width={152}
          height={152}
          alt="topic"
          title={title}
        />
      </span>
    </Link>
    <Link href={thumbnail} passHref>
      <span className={styles['album-title']} title={title}>
        {title.substring(0, 20)}
        {title.length > 40 && '...'}
      </span>
    </Link>
  </li>
);

export default AlbumItem;
