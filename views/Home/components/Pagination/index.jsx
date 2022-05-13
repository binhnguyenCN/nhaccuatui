// libs
import React from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
// others
import styles from './styles.module.scss';

const Pagination = ({ pagination, onPageChange }) => {
  const { limit, total, page } = pagination;
  const handlePageChange = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <div className={styles['pagination-wrapper']}>
      <div className={styles['pagination-inner']}>
        <button
          type="button"
          disabled={page <= 1}
          className={styles['pagination-left']}
          onClick={() => handlePageChange(page - 1)}
        >
          <LeftOutlined />
        </button>
        <div className={styles['pagination-index']}>
          {page}
          <span> / </span>
          {Math.ceil(total / limit)}
        </div>
        <button
          type="button"
          className={styles['pagination-right']}
          disabled={page >= Math.ceil(total / limit)}
          onClick={() => handlePageChange(page + 1)}
        >
          <RightOutlined />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
