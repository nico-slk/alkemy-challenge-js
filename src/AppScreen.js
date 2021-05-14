import React, { useContext, useEffect, useState } from 'react'
import UserContext from './context/context'

export default function AppScreen(props) {
    const userContext = useContext(UserContext)
    const [state, setState] = useState({
        email: '',
        name: '',
        lastname: '',
        password: ''
    });
    const [errorState, setErrorState] = useState(false);

    useEffect(() => {
        userContext.getAllUsers()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        await userContext.createUser(state)
        await userContext.getAllUsers()
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const handleDelete = async (id) => {
        await userContext.deleteUser(id)
        await userContext.getAllUsers()
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
                {userContext.users?.map(e => <li key={e.id}>{e.name} <button onClick={() => handleDelete(e.id)}>Delete</button></li>)}
            </ul>
        </div>
    )
}
