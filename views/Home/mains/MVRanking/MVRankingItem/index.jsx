// libs
import Link from 'next/link';
import React from 'react';

// layouts
import styles from './styles.module.scss';

const MVRankingItem = ({ thumbnail, title, artists, index }) => (
  <li className={styles['mv-ranking-item']}>
    <div className={styles['mv-ranking-thumbnail']}>
      <img
        src={thumbnail}
        width={index === 1 ? 300 : 110}
        height={index === 1 ? 168 : 62}
        alt="mv ranking"
        title={title}
      />
      <div className={styles['ranking-order']}>{index}</div>
      <div className={styles['thumbnail-dark-layer']} />
    </div>
    <div className={styles['mv-ranking-info']}>
      <div className={styles['mv-ranking-title']}>{title}</div>
      <div className={styles['mv-ranking-artists']}>
        {artists.map((artist, notFirstItem) => (
          <Link href={artist.imageUrl || '/'} key={artist.artistId}>
            {notFirstItem ? `, ${artist.name}` : artist.name}
          </Link>
        ))}
      </div>
    </div>
  </li>
);

export default MVRankingItem;
