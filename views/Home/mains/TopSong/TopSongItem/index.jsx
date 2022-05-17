// libs
import Link from 'next/link';
import React from 'react';
// others
import styles from './styles.module.scss';

const TopSongItem = ({ title, thumbnail }) => (
  <li className={styles['top-song-item']} title={title}>
    <div className={styles['top-song-thumbnail']}>
      <Link href={thumbnail} passHref>
        <span>
          <img src={thumbnail} width={152} height={152} alt={title} />
        </span>
      </Link>
    </div>
  </li>
);

export default TopSongItem;
