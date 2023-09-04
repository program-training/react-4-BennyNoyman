import React, { createContext, useState } from 'react';
interface ContextType {
    sentence: string;
    setSentence: React.Dispatch<React.SetStateAction<string>>;
}
interface ContextProviderProps {
    children: React.ReactNode;
}
export const Context = createContext<ContextType | null>(null);
const ContextProvider: React.FC<ContextProviderProps> = (props) => {
    const [sentence, setSentence] = useState<string>("Hello World");
    return(
        <Context.Provider value={{sentence, setSentence}}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider;