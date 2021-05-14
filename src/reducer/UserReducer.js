import { GET_ALL_USERS, GET_USER, DELETE_USER, EDIT_USER, CREATE_USER } from '../constans/const'

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case CREATE_USER:
            return {
                ...state,
                users: payload
            }
        case GET_ALL_USERS:
            return {
                ...state,
                users: payload
            }
        case GET_USER:
            return {
                ...state,
                user: payload
            }
        case DELETE_USER:
            return {
                ...state,
                users: state.users.filter((c) => c.id !== action.payload),
            }
        case EDIT_USER:
            return {
                ...state,
                user: payload
            }
        default:
            return state;
    }
}