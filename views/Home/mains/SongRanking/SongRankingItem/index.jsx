// libs
import Link from 'next/link';
import React from 'react';
// layouts
import styles from './styles.module.scss';

const SongRankingItem = ({ thumbnail, title, artists, index }) => (
  <li className={styles['song-ranking-item']} data-testid="song-ranking-item">
    <div className={styles['song-ranking-thumbnail']}>
      {index === 1 && (
        <img
          src={thumbnail}
          width={100}
          height={100}
          alt="song ranking"
          title={title}
        />
      )}
      <div className={styles['ranking-order']}>{index}</div>
    </div>
    <div className={styles['song-ranking-info']}>
      <div className={styles['song-ranking-title']}>{title}</div>
      <div className={styles['song-ranking-artists']}>
        {artists.map((artist, notFirstItem) => (
          <Link href={artist.imageUrl || '/'} key={artist.artistId}>
            {notFirstItem ? `, ${artist.name}` : artist.name}
          </Link>
        ))}
      </div>
    </div>
  </li>
);

export default SongRankingItem;
