import { useState, useEffect } from 'react';

const getSavedValue = (key: string, defaultValue: any) => {
  const item = localStorage.getItem(key);
  const savedValue = item ? JSON.parse(item) : null;
  if (savedValue !== null) return savedValue;

  if (defaultValue instanceof Function) return defaultValue();
  return defaultValue;
};

const useLocalStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
};

export default useLocalStorage;
