import React, {createContext, useEffect, useState} from 'react';

interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
interface UserContextType {
    user: UserData;
    setUser: React.Dispatch<React.SetStateAction<UserData>>;
}
interface UserContextProviderProps {
    children: React.ReactNode;
}
export const UserContext = createContext<UserContextType | null>(null);
const UserContextProvider: React.FC<UserContextProviderProps> = (props) => {
    const [user, setUser] = useState<UserData | null>(null);
    useEffect(() => {
        const fetchItems = async () => {
            const userData = await fetch(`https://jsonplaceholder.typicode.com/users?id=${Math.round(Math.random()*10)+1}`);
            const userArr = await userData.json();
            const user: UserData = userArr[0];
            setUser(user);
        }
        fetchItems()
    },[])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
};
export default UserContextProvider;