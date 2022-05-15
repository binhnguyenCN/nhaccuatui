// libs
import Link from 'next/link';
import React from 'react';
// others
import styles from './styles.module.scss';

const HeaderAuth = () => (
  <div className={styles['header-auth']}>
    <Link href="/" passHref>
      <button
        type="button"
        className={`${styles['header-auth_login']} ${styles.btn}`}
      >
        Đăng nhập
      </button>
    </Link>
    <Link href="/" passHref>
      <button
        type="button"
        className={`${styles['header-auth_signup']} ${styles.btn} ${styles['btn-active']}`}
      >
        Đăng ký
      </button>
    </Link>
  </div>
);
export default HeaderAuth;
