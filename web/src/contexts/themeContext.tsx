import { createContext, useContext, useState, useMemo, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components';
import { Dark, Light, ThemeType } from '../core';

interface ThemeContextProps {
  toggleTheme: () => void;
  themeScheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeScheme, setThemeScheme] = useState<'light' | 'dark'>('light');
  const theme: ThemeType = useMemo(() => (themeScheme === 'dark' ? Dark : Light), [themeScheme]);

  const toggleTheme = () => {
    setThemeScheme(prevScheme => (prevScheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeScheme }}>
      <StyledThemeProvider theme={theme as DefaultTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
