import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = "Mimosa-theme";
const DEFAULT_THEME: Theme = "light";

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize from localStorage or default
    if (typeof window === "undefined") return DEFAULT_THEME;
    const stored = localStorage.getItem(STORAGE_KEY);
    return (stored === "dark" || stored === "light") ? stored : DEFAULT_THEME;
  });

  const isDark = theme === "dark";

  // Apply theme to DOM whenever it changes
  useEffect(() => {
    const html = document.documentElement;
    
    if (isDark) {
      html.classList.add("dark");
      html.style.colorScheme = "dark";
    } else {
      html.classList.remove("dark");
      html.style.colorScheme = "light";
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme: Theme = isDark ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem(STORAGE_KEY, newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};
