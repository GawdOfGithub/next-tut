'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  mode: string;
  setMode: (mode: string) => void;
};

// Provide a default context value to avoid runtime errors
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState('dark');
  useEffect(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (mode === 'dark' || mode === 'light') {
      
      document.documentElement.classList.remove('light', 'dark');
      document.documentElement.classList.add(mode);
    }
  }, [mode]);
  

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("There is some problem with the implementation of context.");
  }

  return context;
}

export default ThemeProvider;
