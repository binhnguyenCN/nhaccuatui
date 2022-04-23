import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const Category = (props) => {
  const { type, data } = props;

  return (
    <article className={`${styles.category} ${type}`}>
      <h3 className={styles['category-title']}>CATEGORY TITLE</h3>
      <ul className={type}>
        {data.map((item) => (
          <li key={item} className={type} />
        ))}
      </ul>
    </article>
  );
};

Category.propTypes = {
  type: PropTypes.oneOf(['album-list', 'album-hot', 'mv-list', 'song-list'])
    .isRequired,
};
export default Category;
