import PropTypes from 'prop-types';
import React from 'react';

import styles from './styles.module.scss';

const Category = (props) => {
  const { type, title } = props;
  const myList = [1, 2, 3];
  return (
    <article className={`${styles.category} ${styles[`${type}-category`]}`}>
      <h3 className={styles['category-title']}>{title}</h3>
      <ul className={`${styles[`${`${type}-list`}`]}`}>
        {myList.map((item) => (
          <li key={item} className={type} />
        ))}
      </ul>
    </article>
  );
};

Category.propTypes = {
  type: PropTypes.string.isRequired,
};
export default Category;
