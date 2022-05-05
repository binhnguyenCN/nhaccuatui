// libs
import classnames from 'classnames';
import React from 'react';
// layout
import styles from './styles.module.scss';

const Slider = ({ banners }) => (
  <div className={classnames(styles['slider-wrapper'])}>
    <div className={classnames(styles['slider-inner'])}>
      <img src={banners[0].imageUrl} alt="banner" width={962} height={388} />
    </div>
  </div>
);
export default Slider;
