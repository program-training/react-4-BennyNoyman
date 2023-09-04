import {useContext} from "react";
import {Context} from "../../Context/ContextProvider";
export default function Child() {
    const context = useContext(Context);
    if (!context) return;
    const {sentence} = context;
    return(
        <>
            <h3>{sentence}</h3>
        </>
    )
}