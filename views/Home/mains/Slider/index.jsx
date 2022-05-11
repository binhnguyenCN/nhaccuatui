// libs
import classnames from 'classnames';
import Image from 'next/image';
import React from 'react';
// layouts
import images from '../../../../constants/images';
import styles from './styles.module.scss';

const Slider = ({ banners }) => {
  const banner = banners[0];
  return (
    <div className={classnames(styles['slider-wrapper'])}>
      <div className={classnames(styles['slider-inner'])}>
        <Image
          src={banner && banner.thumbnail}
          blurDataURL={images.blurDataURL}
          alt="banner"
          width={962}
          height={388}
        />
      </div>
    </div>
  );
};

export default Slider;
