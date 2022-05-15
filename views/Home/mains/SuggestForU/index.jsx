// libs
import { CaretRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
// others
import styles from './styles.module.scss';
import colors from '@/constants/colors';
import ContentPlaylist from '@/data_source/SuggestForU';

const SuggestForYou = () => (
  <div className={styles['suggest-foru-wrapper']}>
    <div className={styles['suggest-foru-inner']}>
      <h3 className={styles['suggest-title']}>{ContentPlaylist.title}</h3>
      <p className={styles['suggest-description']}>{ContentPlaylist.desc}</p>
      <Link href={ContentPlaylist.url} passHref>
        <div className={styles['suggest-btn']}>
          <CaretRightOutlined color={colors.primary} />
          {ContentPlaylist.btn}
        </div>
      </Link>
    </div>
  </div>
);
export default SuggestForYou;
