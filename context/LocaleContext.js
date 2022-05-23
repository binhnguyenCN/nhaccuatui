// libs
import React, { createContext, useContext, useMemo } from 'react';
// hooks
import useLocalStorage from '../hooks/useLocalStorage';
// locales
import locales from '../locales';

const LocaleContext = createContext();

export const ProvideLocale = ({ children, value }) => {
  const [locale, setLocale] = useLocalStorage('locale', 'vi');

  const providerLang = useMemo(
    () => ({
      locale,
      setLocale,
      localDataSource: locale ? locales[locale] : locales.vi,
    }),
    [locale, setLocale],
  );
  return (
    <LocaleContext.Provider value={value || providerLang}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocale = () => useContext(LocaleContext);
