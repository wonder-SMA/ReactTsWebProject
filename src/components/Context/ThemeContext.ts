import { createContext } from 'react';

const themes = {
  light: {
    bg: '#fff',
    color: '#000',
  },
  dark: {
    bg: '#000',
    color: '#fff',
  },
};

const ThemeContext = createContext(themes.light);

export { themes, ThemeContext };
