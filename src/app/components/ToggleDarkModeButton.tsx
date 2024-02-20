import React from 'react';
import { useTheme } from '../../Context/ThemeContext'

const ToggleDarkModeButton = () => { 
    const { darkMode, toggleDarkMode } = useTheme(); 


    return (
        <button onClick={toggleDarkMode}> 
            Switch to {darkMode ? 'Light' : 'Dark'} Mode
        </button>
    )
}

export default ToggleDarkModeButton;