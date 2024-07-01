import { createContext } from "react";


export const UserContext = createContext({
    id : 0,
    username : "default",
    email : "default@gmail.com",
    name : "hello",
    setUserData : () => {}
});