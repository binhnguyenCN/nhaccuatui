// libs
import classnames from 'classnames';
import React from 'react';
// others
import styles from './styles.module.scss';

const Slider = ({ banners }) => {
  const banner = banners[0];
  return (
    <div className={classnames(styles['slider-wrapper'])}>
      <div className={classnames(styles['slider-inner'])}>
        <img
          src={banner && banner.thumbnail}
          alt="banner"
          width={962}
          height={388}
        />
      </div>
    </div>
  );
};

export default Slider;
