import {useContext} from "react";
import {UserContext} from "../../Context/UserContext";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import ThemeContextProvider from "../../Context/ThemeContent";
export default function Header() {
    const context = useContext(UserContext);
    if (!context) return;
    const {user} = context
    if (!user) return;
    const {name} = user;
    return(
        <>
            <h3>{name}</h3>
            <ThemeContextProvider>
                <ThemeSwitcher/>
            </ThemeContextProvider>
        </>
    )
}