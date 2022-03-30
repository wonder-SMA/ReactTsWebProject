import React, { useState, useEffect } from 'react';

function useLocalStorage<T>(
  tokenKey: string,
  initialValue: T,
): [T, React.Dispatch<T>] {
  const getValue = () => {
    const storage = localStorage.getItem(tokenKey);
    if (storage) {
      return JSON.parse(storage);
    }
    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    localStorage.setItem(tokenKey, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
}

export { useLocalStorage };
