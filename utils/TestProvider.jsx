// libs
import { useState } from 'react';
// others
import locales from '@/locales';
import { ProvideLocale } from '@/context/LocaleContext';

const TestProvider = ({ children }) => {
  const [locale, setLocale] = useState('vi');
  return (
    <ProvideLocale
      value={{ locale, setLocale, localDataSource: locales[locale] }}
    >
      {children}
    </ProvideLocale>
  );
};
export default TestProvider;
