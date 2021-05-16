import React, { useReducer } from 'react'
import OpReducer from '../reducer/OpReducer'
import { OperationsContext } from './context'
import axios from 'axios'

const OperationState = (props) => {
    const operationInitialState = {
        reason: '',
        amount: null,
        type: ''
    }


    const [state, dispatch] = useReducer(OpReducer, operationInitialState)

    const getAllOp = async () => {
        const response = await axios.get('http://localhost:3001/transaction/all')
        dispatch({ type: 'GET_OP', payload: response.data })
    }

    const createOp = async () => {
        const response = await axios.get('http://localhost:3001/transaction/')
        dispatch({ type: 'CREATE_OP', payload: response.data })
    }

    const getOpByUser = async (userId) => {
        const response = await axios.get('http://localhost:3001/transaction/t/' + userId)
        dispatch({ type: 'GET_OP_BY_USER', payload: response.data })
    }

    const editOp = async (userId) => {
        const response = await axios.get('http://localhost:3001/transaction/' + userId)
        dispatch({ type: 'EDIT_OP', payload: response.data })
    }

    const deleteOp = async (userId) => {
        const response = await axios.get('http://localhost:3001/transaction/' + userId)
        dispatch({ type: 'DELETE_OP', payload: response.data })
    }

    return (
        <OperationsContext.Provider value={{
            reason: state.reason,
            amount: state.amount,
            type: state.type,
            getAllOp,
            createOp,
            getOpByUser,
            editOp,
            deleteOp
        }}>
            {props.children}
        </OperationsContext.Provider>
    )

}

export default OperationState;