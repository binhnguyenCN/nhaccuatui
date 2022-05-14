// libs
import React, { useRef } from 'react';

// others
import { useLocale } from '../../../../../context/LocaleContext';
import styles from './styles.module.scss';

const SelectLang = () => {
  const langs = ['vi', 'en'];
  const langRef = useRef();
  const { locale, setLocale, localDataSource } = useLocale();

  const handleChangeLang = (e) => {
    setLocale(e.target.value);
  };

  return (
    <div className={styles['select-lang-wrapper']}>
      <select
        id="langs"
        ref={langRef}
        defaultValue={locale || 'vi'}
        onChange={handleChangeLang}
      >
        {langs.map((option) => (
          <option value={option} key={option}>
            {localDataSource[option]}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectLang;
