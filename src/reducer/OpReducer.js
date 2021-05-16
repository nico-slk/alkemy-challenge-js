import { GET_OP, GET_OP_BY_USER, EDIT_OP } from '../constans/const'

const initialState = {
    op: {},
    ops: []
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
    const { payload, type } = action;
    switch (type) {
        case GET_OP_BY_USER:
            return {
                ...state,
                ops: payload
            }
        case GET_OP:
            return {
                ...state,
                op: payload
            }
        case EDIT_OP:
            return {
                ...state,
                op: payload
            }
        default:
            return state;
    }
}