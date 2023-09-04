import React, { createContext, useState } from 'react';
interface ContextProviderProps {
    children: React.ReactNode;
}
export const ThemeContext = createContext<string | null>(null);
const ThemeContextProvider: React.FC<ContextProviderProps> = (props) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;