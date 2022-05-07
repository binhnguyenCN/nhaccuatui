// libs
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// layouts
import images from '../../../../../constants/images';
import styles from './styles.module.scss';

const AlbumItem = ({ album }) => (
  <li className={styles['album-item']}>
    <Link href={album.thumbnail}>
      <Image
        src={album.thumbnail}
        width={152}
        height={152}
        blurDataURL={images.blurDataURL}
        alt="topic"
      />
    </Link>
    <Link href={album.thumbnail}>
      <span className={styles['album-title']}>{album.title}</span>
    </Link>
  </li>
);

export default AlbumItem;
