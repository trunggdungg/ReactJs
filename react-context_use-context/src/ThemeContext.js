import { useState, createContext } from 'react';

const ThemeContext = createContext();

function ThemeContextProvider({ children }) {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const value = {
        theme,
        toggleTheme
    };
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )

}

export { ThemeContext, ThemeContextProvider };