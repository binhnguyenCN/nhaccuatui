import React from 'react';

// import styles from './styles.module.scss';

const Category = (props) => {
  const { type, title } = props;
  // const myList = [1, 2, 3];
  return (
    <h1>Category</h1>
    // <article className={`${styles.category} ${styles[`${type}-category`]}`}>
    //   <h3 className={styles['category-title']}>{title}</h3>
    //   <ul className={`${styles[`${`${type}-list`}`]}`}>
    //     {myList.map((item) => (
    //       <li key={item} className={type} />
    //     ))}
    //   </ul>
    // </article>
  );
};
export default Category;
