import "./App.css";
import ContextProvider from "./Context/ContextProvider";
import ThemeContextProvider from "./Context/ThemeContent";
import GrandPa from "./components/GrandPa/GrandPa";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher";
import { Example } from "./components/Example/Example";

function App() {
  return (
    <>
      <Example />{" "}
        <ContextProvider>
            <GrandPa/>
        </ContextProvider>
        <ThemeContextProvider>
            <ThemeSwitcher/>
        </ThemeContextProvider>
    </>
  );
}

export default App;
