// libs
import classnames from 'classnames';
import React from 'react';
// others
import styles from './styles.module.scss';

const FooterCopyright = ({ copyright }) => (
  <div className={classnames(styles['footer-copyright'])}>
    {copyright.content}
  </div>
);

export default FooterCopyright;
