import React from 'react';

import styles from './styles.module.scss';

const TopSong = () => (
  <article className={`${styles.category} ${styles['top-song-category']}`}>
    <h1>TOP-SONG CATEGORY</h1>
  </article>
);
export default TopSong;
