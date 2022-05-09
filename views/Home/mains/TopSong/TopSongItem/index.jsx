// libs
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// layouts
import styles from './styles.module.scss';

const TopSongItem = ({ song }) => (
  <div className={styles['top-song-item']}>
    <Link href={song.thumbnail}>
      <Image src={song.thumbnail} width={152} height={152} />
    </Link>
  </div>
);

export default TopSongItem;
