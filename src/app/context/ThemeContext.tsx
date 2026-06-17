"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
  theme: {
    background: string;
    text: string;
    card: string;
    border: string;
    header: string;
    footer: string;
    accent: string;
    secondary: string;
  };
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Light theme colors
const lightTheme = {
  background: "#f7f2ec",
  text: "#2b2520",
  card: "#fffcf8",
  border: "#e8dfd6",
  header: "#fffcf8",
  footer: "#2b2520",
  accent: "#7c5f4b",
  secondary: "#dacfc4",
};

// Dark theme colors
const darkTheme = {
  background: "#1a1614",
  text: "#e8dfd6",
  card: "#2b2520",
  border: "#3d3530",
  header: "#2b2520",
  footer: "#1a1614",
  accent: "#a8846b",
  secondary: "#5f554a",
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      const isDark = stored === 'true';
      setDarkMode(isDark);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('darkMode', String(darkMode));
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}