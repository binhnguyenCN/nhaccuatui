// libs
import classnames from 'classnames';
import Link from 'next/link';
import React from 'react';
// layout
import styles from './styles.module.scss';

const FooterContact = ({ contactInfo }) => (
  <ul className={styles['footer-contact']}>
    {contactInfo &&
      contactInfo.map((detail) => (
        <li className={classnames(styles['contact-detail'])} key={detail.title}>
          <Link href={detail.link}>
            <span>
              {detail.icon}
              {detail.content}
            </span>
          </Link>
        </li>
      ))}
  </ul>
);

export default FooterContact;
