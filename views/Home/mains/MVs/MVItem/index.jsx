// libs
import { CustomerServiceOutlined, PlayCircleOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import Link from 'next/link';
import React from 'react';
// others
import styles from './styles.module.scss';

const MVItem = ({ thumbnail, title, duration, artists, index }) => (
  <li className={styles['mv-item']}>
    <div className={styles['mv-thumbnail']}>
      <Link href={thumbnail} passHref>
        <span>
          <img
            src={thumbnail}
            width={index < 2 ? 410 : 195}
            height={index < 2 ? 230 : 109}
            alt="topic"
            title={title}
          />
        </span>
      </Link>
      <div className={classnames(styles['thumbnail-dark-layer'])} />
      <div className={classnames(styles['thumbnail-play-icon'])}>
        <PlayCircleOutlined />
      </div>
      <div className={classnames(styles['thumbnail-durations'])}>
        <CustomerServiceOutlined />
        <span>{duration}</span>
      </div>
    </div>
    <div className={styles['mv-info']}>
      <Link title={title} href={thumbnail} passHref>
        <span className={styles['mv-title']}>
          {title.substring(0, 20)}
          {title.length > 20 && '...'}
        </span>
      </Link>
      <span className={styles['artist-list']}>
        {artists.map((artist, isFirstItem) => (
          <Link href={artist.imageUrl || '/'} key={artist.artistId}>
            {!isFirstItem ? artist.name : `, ${artist.name}`}
          </Link>
        ))}
      </span>
    </div>
  </li>
);

export default MVItem;
