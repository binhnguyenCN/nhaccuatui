// libs
import { RightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
// layouts
import styles from './styles.module.scss';

const CompanyInfoItem = ({ info }) => (
  <li className={styles['info-navigation-item']}>
    <div className={styles['navi-title']}>{info.title}</div>
    <ul className={styles['navi-list']}>
      {info.items.map((item) => (
        <li className={styles['navi-item']} key={item.title}>
          <Link href={item.url} passHref>
            <span>
              <RightOutlined />
              {item.title}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </li>
);

export default CompanyInfoItem;
