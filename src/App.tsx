import "./App.css";
import ContextProvider from "./Context/ContextProvider";
import GrandPa from "./components/GrandPa/GrandPa";
import { Example } from "./components/Example/Example";

function App() {
  return (
    <>
      <Example />{" "}
        <ContextProvider>
            <GrandPa/>
        </ContextProvider>
    </>
  );
}

export default App;
