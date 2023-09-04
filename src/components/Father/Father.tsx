import {useContext, useRef} from "react";
import {Context} from "../../Context/ContextProvider";
import Child from "../Child/Child";
export default function Father() {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const context = useContext(Context);
    if (!context) return;
    const {setSentence} = context;
    return(
        <>
            <Child/>
                <input ref={inputRef}/>
            <button onClick={() => {if (inputRef.current?.value) {setSentence(inputRef.current.value)}}}>
                Set Sentence
            </button>
        </>
    )
}