// libs
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classnames from 'classnames';
import { CustomerServiceOutlined, PlayCircleOutlined } from '@ant-design/icons';

// layouts
import styles from './styles.module.scss';
// others
import images from '../../../../../constants/images';

const NewReleaseItem = ({ song }) => (
  <li className={styles['album-hot-item']}>
    <div className={styles['album-thumbnail']}>
      <Link href={song.thumbnail}>
        <span>
          <Image
            src={song.thumbnail}
            width={152}
            height={152}
            blurDataURL={images.blurDataURL}
            alt="topic"
            title={song.title}
          />
        </span>
      </Link>
      <div className={classnames(styles['thumbnail-dark-layer'])} />
      <div className={classnames(styles['thumbnail-play-icon'])}>
        <PlayCircleOutlined />
      </div>
      <div className={classnames(styles['thumbnail-durations'])}>
        <CustomerServiceOutlined />
        <span>{song.duration}</span>
      </div>
    </div>
    <div className={styles['album-info']}>
      <Link href={song.thumbnail}>
        <span className={styles['album-title']}>{song.title}</span>
      </Link>
      <span className={styles['artist-list']}>
        {song.artists.map((artist, index) => (
          <Link href={artist.imageUrl || '/'} key={artist.artistId}>
            {index ? `, ${artist.name}` : artist.name}
          </Link>
        ))}
      </span>
    </div>
  </li>
);
export default NewReleaseItem;
