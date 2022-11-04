import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getLocalStorage = (key) => localStorage.getItem(key);
const setLocalStorage = (key, value) => localStorage.setItem(key, value);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getLocalStorage("theme") || "dark");
  useEffect(() => {
    if (theme === "dark") { 
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
    setLocalStorage("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }} children={children} />
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
