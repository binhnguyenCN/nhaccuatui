import React from 'react';

import categoryStyles from '../styles.module.scss';
import styles from './styles.module.scss';

const WeeklyArtist = () => (
  <article
    className={`${categoryStyles.category}
    ${styles['weekly-artist-category']}`}
  >
    <h1>WEEKLY ARTIST CATEGORY</h1>
  </article>
);
export default WeeklyArtist;
