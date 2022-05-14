import { useEffect, useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState('');
  useEffect(() => {
    const localValue = localStorage.getItem(key);
    setStoredValue(localValue || initialValue);
    if (!localValue) {
      localStorage.setItem(key, JSON.stringify(initialValue));
    }
  }, []);

  const setValue = (value) => {
    const newValue = value instanceof Function ? value() : value;
    setStoredValue(
      typeof newValue === 'string' ? newValue : JSON.stringify(newValue),
    );
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, JSON.stringify(newValue));
    }
  };
  return [storedValue, setValue];
};
export default useLocalStorage;
