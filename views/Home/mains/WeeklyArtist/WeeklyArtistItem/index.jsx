// libs
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// others
import images from '../../../../../constants/images';
import styles from './styles.module.scss';

const WeeklyArtistItem = ({ artist }) => (
  <li className={styles['weekly-artist-item']} title={artist.title}>
    <div className={styles['weekly-artist-thumbnail']}>
      <Link href={artist.thumbnail}>
        <span>
          <Image
            src={artist.thumbnail}
            width={152}
            height={152}
            blurDataURL={images.blurDataURL}
            alt={artist.title}
          />
        </span>
      </Link>
      <div className={styles['thumbnail-dark-layer']} />
    </div>
  </li>
);

export default WeeklyArtistItem;
