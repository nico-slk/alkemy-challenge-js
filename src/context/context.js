import { createContext } from "react";

const UserContext = createContext({
    name: 'Guest',
    lastname: String(Math.floor(Math.random() * 100000))
});

export default UserContext;