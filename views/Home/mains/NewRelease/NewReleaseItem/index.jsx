// libs
import Link from 'next/link';
import React from 'react';
import classnames from 'classnames';
import { CustomerServiceOutlined, PlayCircleOutlined } from '@ant-design/icons';
// others
import styles from './styles.module.scss';

const NewReleaseItem = ({ thumbnail, title, artists, duration }) => (
  <li className={styles['album-hot-item']}>
    <div className={styles['album-thumbnail']}>
      <Link href={thumbnail} passHref>
        <span>
          <img
            src={thumbnail}
            width={152}
            height={152}
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
    <div className={styles['album-info']}>
      <Link href={thumbnail} passHref>
        <span className={styles['album-title']}>{title}</span>
      </Link>
      <span className={styles['artist-list']}>
        {artists.map((artist, notFirstItem) => (
          <Link href={artist.imageUrl || '/'} key={artist.artistId}>
            {notFirstItem ? `, ${artist.name}` : artist.name}
          </Link>
        ))}
      </span>
    </div>
  </li>
);
export default NewReleaseItem;
