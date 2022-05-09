// libs
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import images from '../../../../../constants/images';

// layouts
import styles from './styles.module.scss';

const WeeklyArtistItem = ({ artist }) => (
  <li className={styles['weekly-artist-item']} title={artist.title}>
    <div className={styles['weekly-artist-thumbnail']}>
      <Link href={artist.thumbnail}>
        <Image
          src={artist.thumbnail}
          width={152}
          height={152}
          blurDataURL={images.blurDataURL}
          alt={artist.title}
        />
      </Link>
      <div className={styles['thumbnail-dark-layer']} />
    </div>
  </li>
);

export default WeeklyArtistItem;