import { ProvideLocale } from '@/context/LocaleContext';

const TestProvider = ({ children }) => (
  <ProvideLocale>{children}</ProvideLocale>
);
export default TestProvider;
