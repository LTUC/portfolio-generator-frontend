import { createContext, useContext, useState } from "react";


const ThemeContext = createContext();
export default ThemeContext;


export function ThemeProvider({ children }) {
    return (
        <ThemeContext.Provider value="dark">
            {children}
        </ThemeContext.Provider>
    )
}