import React, { useReducer } from 'react'
import UserReducer from '../reducer/UserReducer'
import UserContext from './context'
import axios from 'axios'

const UserState = (props) => {
    const userInitialState = {
        user: {}
    }

    const [state, dispatch] = useReducer(UserReducer, userInitialState)

    const getUser = async (id) => {
        const response = await axios.get('/:id')
        console.log(response)
    }

    const deleteUser = async (id) => {
        const response = await axios.delete('/:id')
        console.log(response)
    }

    const editUser = async (id) => {
        const response = await axios.put('/:id')
        console.log(response)
    }

    return (
        <UserContext.Provider value={{
            user: state.user,
            getUser,
            deleteUser,
            editUser,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;