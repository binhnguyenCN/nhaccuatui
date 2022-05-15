// libs
import Link from 'next/link';
import React from 'react';
import classnames from 'classnames';
import { CustomerServiceOutlined, PlayCircleOutlined } from '@ant-design/icons';
// others
import styles from './styles.module.scss';

const NewReleaseItem = ({ song }) => (
  <li className={styles['album-hot-item']}>
    <div className={styles['album-thumbnail']}>
      <Link href={song.thumbnail} passHref>
        <span>
          <img
            src={song.thumbnail}
            width={152}
            height={152}
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
      <Link href={song.thumbnail} passHref>
        <span className={styles['album-title']}>{song.title}</span>
      </Link>
      <span className={styles['artist-list']}>
        {song.artists.map((artist, notFirstItem) => (
          <Link href={artist.imageUrl || '/'} key={artist.artistId}>
            {notFirstItem ? `, ${artist.name}` : artist.name}
          </Link>
        ))}
      </span>
    </div>
  </li>
);
export default NewReleaseItem;
