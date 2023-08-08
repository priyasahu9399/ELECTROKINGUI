import { AUTH_TOKEN } from "../types";

const initialState = {
    token: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case AUTH_TOKEN:
            return {
                ...state,
                token: action.payload
            }
        default:
            return state;
    }
}