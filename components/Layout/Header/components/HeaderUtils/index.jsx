// libs
import React from 'react';

// others
import images from '../../../../../constants/images';
import styles from './styles.module.scss';

const HeaderUtils = () => (
  <div className={styles['header-util']}>
    <div className={styles['header-util_payment']}>
      <img src={images.store} alt="store" width={28} height={28} />
    </div>
    <div className={styles['header-util_upload']}>
      <img src={images.upload} alt="upload" width={28} height={28} />
    </div>
  </div>
);

export default HeaderUtils;
