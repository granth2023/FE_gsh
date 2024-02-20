import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
    darkMode: false, 
    toggleDarkMode: () => {}, 
});

export const useTheme = () => useContext(ThemeContext);