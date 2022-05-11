// libs
import Image from 'next/image';
import React from 'react';

// layouts
import images from '../../../../../constants/images';
import styles from './styles.module.scss';

const SongRankingItem = ({ song, index }) => (
  <li className={styles['song-ranking-item']}>
    <div className={styles['song-ranking-thumbnail']}>
      {index === 1 && (
        <Image
          src={song.thumbnail}
          width={100}
          height={100}
          blurDataURL={images.blurDataURL}
          alt="song ranking"
          title={song.title}
        />
      )}
      <div className={styles['ranking-order']}>{index}</div>
    </div>
    <div className={styles['song-ranking-info']}>
      <div className={styles['song-ranking-title']}>{song.title}</div>
      <div className={styles['song-ranking-artists']}>{song.title}</div>
    </div>
  </li>
);

export default SongRankingItem;
