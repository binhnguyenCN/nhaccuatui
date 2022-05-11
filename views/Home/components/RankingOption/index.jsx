// libs
import classnames from 'classnames';
import React, { useState } from 'react';
// layouts
import styles from './styles.module.scss';

const RankingOption = ({ options }) => {
  const [selectedOption, setSelectedOption] = useState('vpop');
  const handleChangeGenre = (option) => {
    setSelectedOption(option);
  };
  return (
    <ul className={classnames(styles['ranking-option'])}>
      {options.map((option) => (
        <li
          className={classnames(styles['ranking-item'], {
            [styles['ranking-item-active']]: option.value === selectedOption,
          })}
          key={option.value}
        >
          <button
            type="button"
            onClick={() => handleChangeGenre(option.value)}
            className={styles['ranking-btn']}
          >
            {option.title}
          </button>
        </li>
      ))}
    </ul>
  );
};
export default RankingOption;
