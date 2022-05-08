// libs
import { CustomerServiceOutlined, PlayCircleOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

// layouts
import images from '../../../../../constants/images';
import styles from './styles.module.scss';

const MVItem = ({ mv, index }) => (
  <li key={mv.key} className={styles['mv-item']}>
    <div className={styles['mv-thumbnail']}>
      <Link href={mv.thumbnail}>
        <Image
          src={mv.thumbnail}
          width={index < 2 ? 410 : 195}
          height={index < 2 ? 230 : 109}
          blurDataURL={images.blurDataURL}
          alt="topic"
          title={mv.title}
        />
      </Link>
      <div className={classnames(styles['thumbnail-dark-layer'])} />
      <div className={classnames(styles['thumbnail-play-icon'])}>
        <PlayCircleOutlined />
      </div>
      <div className={classnames(styles['thumbnail-durations'])}>
        <CustomerServiceOutlined />
        <span>{mv.duration}</span>
      </div>
    </div>
    <div className={styles['mv-info']}>
      <Link href={mv.thumbnail}>
        <span className={styles['mv-title']}>{mv.title}</span>
      </Link>
      <span className={styles['artist-list']}>
        {mv.artists.map((artist, isFirstItem) => (
          <Link href={artist.imageUrl || '/'} key={artist.artistId}>
            {!isFirstItem ? artist.name : `, ${artist.name}`}
          </Link>
        ))}
      </span>
    </div>
  </li>
);

export default MVItem;
