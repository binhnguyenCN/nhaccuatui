// libs
import { PlayCircleOutlined, RightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React from 'react';
// others
import styles from './styles.module.scss';

const CategoryTitle = ({ title }) => {
  const { content, url, icon } = title;
  return (
    <h3 className={styles['category-title']}>
      <Link href={url}>
        <span>
          <span>{content}</span>
          {icon && (
            <span>
              {icon === 'play' && <PlayCircleOutlined />}
              {icon === 'more' && <RightOutlined />}
            </span>
          )}
        </span>
      </Link>
    </h3>
  );
};

export default CategoryTitle;
