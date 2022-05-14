// libs
import React, { createContext, useContext, useMemo } from 'react';
// hooks
import useLocalStorage from '../hooks/useLocalStorage';
// locales
import locales from '../locales';

const LocaleContext = createContext();

export const ProvideLocale = ({ children }) => {
  const [locale, setLocale] = useLocalStorage('locale', 'vi');

  const providerLang = useMemo(
    () => ({
      locale: locale | 'vi',
      setLocale,
      localDataSource: locale ? locales[locale] : locales.vi,
    }),
    [],
  );
  return (
    <LocaleContext.Provider value={providerLang}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
