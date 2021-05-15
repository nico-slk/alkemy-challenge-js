import { GET_ALL_USERS, GET_USER, EDIT_USER } from '../constans/const'

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
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
        case EDIT_USER:
            return {
                ...state,
                user: payload
            }
        default:
            return state;
    }
}