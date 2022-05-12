// libs
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// others
import images from '../../../../../constants/images';
import styles from './styles.module.scss';

const TopSongItem = ({ song }) => (
  <li className={styles['top-song-item']} title={song.title}>
    <div className={styles['top-song-thumbnail']}>
      <Link href={song.thumbnail}>
        <span>
          <Image
            src={song.thumbnail}
            width={152}
            height={152}
            blurDataURL={images.blurDataURL}
            alt={song.title}
          />
        </span>
      </Link>
    </div>
  </li>
);

export default TopSongItem;
