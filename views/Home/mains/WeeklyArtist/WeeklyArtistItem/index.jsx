// libs
import Link from 'next/link';
import React from 'react';
// others
import styles from './styles.module.scss';

const WeeklyArtistItem = ({ title, thumbnail }) => (
  <li className={styles['weekly-artist-item']} title={title}>
    <div className={styles['weekly-artist-thumbnail']}>
      <Link href={thumbnail} passHref>
        <span>
          <img src={thumbnail} width={152} height={152} alt={title} />
        </span>
      </Link>
      <div className={styles['thumbnail-dark-layer']} />
    </div>
  </li>
);

export default WeeklyArtistItem;
