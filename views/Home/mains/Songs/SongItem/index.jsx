// libs
import { CustomerServiceOutlined } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
// layouts
import images from '../../../../../constants/images';
import styles from './styles.module.scss';

const SongItem = ({ song }) => {
  const getArtists = (artists) => {
    const artistList = [];
    artists.forEach((artist) => {
      artistList.push(artist.name);
    });
    return artistList.join(', ');
  };
  return (
    <li className={styles['song-item']}>
      <div className={styles['song-info']}>
        <div className={styles['song-thumbnail']}>
          <Link href={song.thumbnail}>
            <span>
              <Image
                src={song.thumbnail}
                width={60}
                height={60}
                blurDataURL={images.blurDataURL}
                alt={song.title}
              />
            </span>
          </Link>
        </div>
        <div className={styles['song-desc']}>
          <div className={styles['song-title']}>
            <Link href={song.thumbnail}>
              <span title={`${song.title} - ${getArtists(song.artists)}`}>
                {song.title.substring(0, 20)}
                {song.title.length > 20 && '...'}
              </span>
            </Link>
          </div>
          <div className={styles['song-artists']}>
            {getArtists(song.artists)}
          </div>
        </div>
      </div>
      <div className={styles['song-views']}>
        <CustomerServiceOutlined />
        <span>{song.duration}</span>
      </div>
    </li>
  );
};

export default SongItem;
