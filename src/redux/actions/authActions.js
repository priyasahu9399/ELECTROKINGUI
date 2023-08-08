import { AUTH_TOKEN } from "../types";

export const AuthFunction = () => dispatch => {
    dispatch({
        type: AUTH_TOKEN,
        payload: 's'
    })
}