import {useContext, useState} from "react";
import {ThemeContext} from "../../Context/ThemeContent";
import Text from "../Text/Text";
import './ThemeSwitcher.css';

export default function ThemeSwitcher() {
    const [mode, setMode] = useState<boolean>(true)
    const context = useContext(ThemeContext);
    if (!context) return;
    const {theme, setTheme} = context
    return(
        <div id={theme}>
            <Text/>
            <button onClick={() => {setMode(mode => !mode);
                mode ? setTheme('light'): setTheme('dark')}}>Change Theme</button>
        </div>
    )
}