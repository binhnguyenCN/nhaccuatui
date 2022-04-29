import React from 'react';

import styles from './styles.module.scss';
import categoryStyles from '../styles.module.scss';

const TopSong = () => (
  <article
    className={`${categoryStyles.category}
    ${styles['top-song-category']}`}
  >
    <h1>TOP-SONG CATEGORY</h1>
  </article>
);
export default TopSong;
