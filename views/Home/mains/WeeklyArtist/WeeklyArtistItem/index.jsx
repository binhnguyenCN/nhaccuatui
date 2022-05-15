// libs
import Link from 'next/link';
import React from 'react';
// others
import styles from './styles.module.scss';

const WeeklyArtistItem = ({ artist }) => (
  <li className={styles['weekly-artist-item']} title={artist.title}>
    <div className={styles['weekly-artist-thumbnail']}>
      <Link href={artist.thumbnail} passHref>
        <span>
          <img
            src={artist.thumbnail}
            width={152}
            height={152}
            alt={artist.title}
          />
        </span>
      </Link>
      <div className={styles['thumbnail-dark-layer']} />
    </div>
  </li>
);

export default WeeklyArtistItem;
