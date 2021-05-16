import { createContext } from "react";

export const UserContext = createContext({
    name: 'Guest',
    lastname: String(Math.floor(Math.random() * 100000))
});

export const OperationsContext = createContext({
    reason: 'No reason',
    amount: 0.0,
    type: 'None'
});