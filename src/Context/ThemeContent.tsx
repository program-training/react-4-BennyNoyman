import React, { createContext, useState } from 'react';
interface ContextProviderProps {
    children: React.ReactNode;
}
interface ThemeContextType {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
}
export const ThemeContext = createContext<ThemeContextType | null>(null);
const ThemeContextProvider: React.FC<ContextProviderProps> = (props) => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}
export default ThemeContextProvider;