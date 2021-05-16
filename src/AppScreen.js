import React, { useContext, useEffect, useState } from 'react'
import { UserContext, OperationsContext } from './context/context'

export default function AppScreen(props) {
    const userContext = useContext(UserContext)
    const operationContext = useContext(OperationsContext)
    const [state, setState] = useState({
        email: '',
        name: '',
        lastname: '',
        password: ''
    });
    const [errorState, setErrorState] = useState(false);

    useEffect(() => {
        userContext.getAllUsers()
        console.log(userContext)
        console.log(operationContext)
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await userContext.createUser(state)
            await userContext.getAllUsers()
            setErrorState(false)
        } catch (error) {
            setErrorState(true)
            console.error(new Error(error));
        }
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                {errorState && <h1>Error</h1>}
                <input placeholder="email" name="email" value={`${state.email}`} onChange={handleChange} />
                <input placeholder="name" name="name" value={`${state.name}`} onChange={handleChange} />
                <input placeholder="lastname" name="lastname" value={`${state.lastname}`} onChange={handleChange} />
                <input placeholder="password" name="password" value={`${state.password}`} onChange={handleChange} />
                <button type="submit" >Click</button>
            </form>
            <ul>
                {userContext.users?.map(e => <li key={e.id}>{e.name}</li>)}
            </ul>
        </div>
    )
}
