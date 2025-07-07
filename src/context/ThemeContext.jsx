
// src/context/ThemeContext.jsx//
// choose not to use useEffect here---probably will do so later for better theme persistence//
import { createContext, useContext,useState} from "react";

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
    if (!context) {
      throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
;}

export const ThemeProvider = ({children}) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className={isDark?"dark":"light"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

// export default ThemeProvider;
export default ThemeContext;
