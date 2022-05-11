// libs
import Link from 'next/link';
import React from 'react';

// layouts
import images from '../../../constants/images';
import CompanyInfoData from '../../../data_source/CompanyInfo';
import CompanyInfoItem from './CompanyInfoItem';
import styles from './styles.module.scss';

const CompanyInfo = () => (
  <article className={styles['company-info-wrapper']}>
    <div className={styles['company-info-inner']}>
      <ul className={styles['info-navigation-list']}>
        {CompanyInfoData.navigationList.map((item) => (
          <CompanyInfoItem info={item} key={item.title} />
        ))}
      </ul>
      <div className={styles['company-info']}>
        <Link href="/">
          <span className={styles['info-logo']}>
            <img
              src={images.logoCompany}
              alt="nhaccuatui"
              width={85}
              height={50}
            />
          </span>
        </Link>
        <div className={styles['info-desc']}>
          <div className={styles['info-desc-title']}>
            {CompanyInfoData.description.title}
          </div>
          <ul className={styles['info-desc-standard']}>
            {CompanyInfoData.description.standards.map((standard) => (
              <li
                className={styles['info-desc-standard-item']}
                key={standard.key}
              >
                {standard.content}
              </li>
            ))}
          </ul>
        </div>
        <Link href="/">
          <span className={styles['info-bct']}>
            <img src={images.bct} alt="nhaccuatui" width={120} height={45} />
          </span>
        </Link>
        <Link href="/">
          <span className={styles['info-dmca']}>
            <img src={images.dmca} alt="nhaccuatui" width={120} height={60} />
          </span>
        </Link>
      </div>
    </div>
  </article>
);
export default CompanyInfo;
