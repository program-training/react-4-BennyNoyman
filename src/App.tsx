import "./App.css";
import ContextProvider from "./Context/ContextProvider";
import UserContextProvider from "./Context/UserContext";
import GrandPa from "./components/GrandPa/GrandPa";
import { Example } from "./components/Example/Example";
import Header from "./components/Header/Header";
import User from "./components/User/User";

function App() {
  return (
    <>
      <Example />{" "}
        <ContextProvider>
            <GrandPa/>
        </ContextProvider>
        <UserContextProvider>
            <Header/>
            <User/>
        </UserContextProvider>
    </>
  );
}

export default App;
