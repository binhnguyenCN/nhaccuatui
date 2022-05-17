// libs
import classnames from 'classnames';
import React from 'react';
import { Carousel } from 'antd';
// others
import styles from './styles.module.scss';

const Slider = ({ banners }) => (
  <div className={classnames(styles['slider-wrapper'])}>
    <div className={classnames(styles['slider-inner'])}>
      <Carousel autoplay effect="fade">
        {banners.map((banner) => (
          <div key={banner && banner.key}>
            <img
              src={banner && banner.thumbnail}
              alt="banner"
              width={1200}
              height={419}
            />
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default Slider;
