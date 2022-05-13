// libs
import Link from 'next/link';
import React from 'react';

// layouts
import styles from './styles.module.scss';

const MVRankingItem = ({ mv, index }) => (
  <li className={styles['mv-ranking-item']}>
    <div className={styles['mv-ranking-thumbnail']}>
      <img
        src={mv.thumbnail}
        width={index === 1 ? 300 : 110}
        height={index === 1 ? 168 : 62}
        alt="mv ranking"
        title={mv.title}
      />
      <div className={styles['ranking-order']}>{index}</div>
      <div className={styles['thumbnail-dark-layer']} />
    </div>
    <div className={styles['mv-ranking-info']}>
      <div className={styles['mv-ranking-title']}>{mv.title}</div>
      <div className={styles['mv-ranking-artists']}>
        {mv.artists.map((artist, notFirstItem) => (
          <Link href={artist.imageUrl || '/'} key={artist.artistId}>
            {notFirstItem ? `, ${artist.name}` : artist.name}
          </Link>
        ))}
      </div>
    </div>
  </li>
);

export default MVRankingItem;
