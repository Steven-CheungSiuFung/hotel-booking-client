import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUser: null,
}

if (window.localStorage.getItem("auth")) {
    INITIAL_STATE.currentUser = JSON.parse(window.localStorage.getItem("auth"))
}

export const UserReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.USER_SIGN_IN:
            return { ...state, currentUser: payload };
        case USER_ACTION_TYPES.USER_SIGN_OUT:
            return { ...state, currentUser: null };
        default:
            return state;
    }
}