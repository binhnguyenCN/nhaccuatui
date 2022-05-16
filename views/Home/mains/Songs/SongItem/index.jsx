// libs
import { CustomerServiceOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
// others
import styles from './styles.module.scss';

const SongItem = ({ thumbnail, title, duration, artists }) => {
  const getArtists = (artistList) => {
    const result = [];
    artistList.forEach((artist) => {
      result.push(artist.name);
    });
    return result.join(', ');
  };
  return (
    <li className={styles['song-item']}>
      <div className={styles['song-info']}>
        <div className={styles['song-thumbnail']}>
          <Link href={thumbnail} passHref>
            <span>
              <img src={thumbnail} width={60} height={60} alt={title} />
            </span>
          </Link>
        </div>
        <div className={styles['song-desc']}>
          <div className={styles['song-title']}>
            <Link href={thumbnail} passHref>
              <span title={`${title} - ${getArtists(artists)}`}>
                {title.substring(0, 20)}
                {title.length > 20 && '...'}
              </span>
            </Link>
          </div>
          <div className={styles['song-artists']}>{getArtists(artists)}</div>
        </div>
      </div>
      <div className={styles['song-views']}>
        <CustomerServiceOutlined />
        <span>{duration}</span>
      </div>
    </li>
  );
};

export default SongItem;
