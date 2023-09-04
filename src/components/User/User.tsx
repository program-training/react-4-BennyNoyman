import {useContext, useState} from "react";
import {UserContext} from "../../Context/UserContext";
export default function User() {
    const [show, setShow] = useState<boolean>(false);
    const context = useContext(UserContext);
    if (!context) return;
    const {user} = context
    if (!user) return;
    const {name} = user;
    return(
        <>
            <h3>{name}</h3>
            <button onClick={() => setShow(show => !show)}>Show full user</button>
            {show && <div>
                <h3>{user.username}</h3>
                <h3>{user.email}</h3>
            </div>
            }
        </>
    )
}