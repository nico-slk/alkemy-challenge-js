import React, { useContext, useEffect, useState } from 'react'
import UserContext from './context/context'

export default function AppScreen() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(state)
        return fetch('http://localhost:3001/', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .catch(() => setErrorState(true))
    }

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value);
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
        </div>
    )
}
