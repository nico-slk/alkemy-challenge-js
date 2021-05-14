import React, { useReducer } from 'react'
import UserReducer from '../reducer/UserReducer'
import UserContext from './context'
import axios from 'axios'

const UserState = (props) => {
    const userInitialState = {
        user: {},
        users: []
    }

    const [state, dispatch] = useReducer(UserReducer, userInitialState)

    const getUser = async (id) => {
        const response = await axios.get('http://localhost:3001/:id')
        // dispatch({ type: 'GET_USER', payload: response.data })
    }
    const getAllUsers = async () => {
        const response = await axios.get('http://localhost:3001/all')
        console.log(response)
        dispatch({ type: 'GET_ALL_USERS', payload: response.data })
    }

    const deleteUser = async (id) => {
        const response = await axios.delete('http://localhost:3001/:id')
        // dispatch({ type: 'DELETE_USER', payload: response.data })
    }

    const editUser = async (id) => {
        const response = await axios.put('http://localhost:3001/:id')
        // dispatch({ type: 'EDIT_USER', payload: response.data })
    }

    return (
        <UserContext.Provider value={{
            user: state.user,
            users: state.users,
            getAllUsers,
            getUser,
            deleteUser,
            editUser,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;