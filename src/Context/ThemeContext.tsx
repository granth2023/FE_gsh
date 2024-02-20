import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
    darkMode: false, 
    toggleDarkMode: () => {}, 
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
    const [ darkMode, setDarkMode] = useState(false);
}