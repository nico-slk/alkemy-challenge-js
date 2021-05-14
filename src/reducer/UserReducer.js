import { GET_ALL_USERS, GET_USER, DELETE_USER, EDIT_USER } from '../constans/const'

export default function (state, action) {
    const { payload, type } = action;
    switch (type) {
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
                users: payload
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